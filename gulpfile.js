var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var pug = require('gulp-pug');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cloudflare = require('gulp-cloudflare');
var cleanCSS = require('gulp-clean-css');
var critical = require('critical').stream;
var order = require("gulp-order");

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Better Error Handling
 */
var gulp_src = gulp.src;
gulp.src = function() {
    return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function(error) {
            // Output an error message
            gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
            // emit the end event, to properly end the task
            this.emit('end');
        }));
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {
        stdio: 'inherit'
    }).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});

/**
 * Compile files from _sass into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {
    return gulp.src('assets/css/*.sass')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('assets/css'));
});

/**
 * Generate & Inline Critical-path CSS
 */
gulp.task('critical', function () {
    return gulp.src(['_site/*.html'])
        .pipe(critical({inline: false, base: '_site/', css: ['_site/assets/css/main.css']}))
        .pipe(cleanCSS())
        .pipe(rename('critical.min.css'))
        .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest('_includes/'));
});

/**
 * Custom Gulp Task
 */
gulp.task('pug', function() {
    return gulp.src('_pugfiles/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('_includes'));
});

gulp.task('scripts', function() {
  return gulp.src(['assets/lib/components-modernizr/modernizr.js', 'assets/lib/jquery/dist/jquery.js', 'assets/lib/bootstrap/dist/js/bootstrap.js', 'assets/lib/imagesloaded/imagesloaded.pkgd.min.js', 'assets/lib/isotope/dist/isotope.pkgd.min.js', 'assets/lib/owlcarousel/owl-carousel/owl.carousel.js', 'assets/lib/waypoints/lib/jquery.waypoints.min.js', 'assets/lib/waypoints/lib/shortcuts/inview.min.js',  'assets/lib/jquery-date-format/jquery-dateFormat.js', 'assets/lib/FlexSlider/jquery.flexslider.js', 'assets/lib/simple-text-rotator/jquery.simple-text-rotator.js', 'assets/lib/magnific-popup/dist/jquery.magnific-popup.js', 'assets/lib/match-height/jquery.matchHeight-min.js', 'assets/lib/jqBootstrapValidation/jqBootstrapValidation.js'])
  .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js/dist/'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/dist/'))
});

// Purge Cloudflare Cache
gulp.task('purge-cdn-cache', function() {
    var options = {
        token  : '24c1ddc7d8f07c6bf57e5acac3a3f72071a53',
        email  : 'jasonm4130@gmail.com',
        domain : 'jasonmdesign.com'
    };
 
    cloudflare(options);
})

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
    gulp.watch('assets/css/**/*.sass', ['sass']);
    gulp.watch(['_pugfiles/**/*.pug'], ['pug']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*', '_posts/*.md', '_portfolio/**/*.md', '_testimonials/**/*.md', 'portfolio/*.html', 'about-us/*.html', 'our-services/*.html', 'blog/*.html'], ['jekyll-rebuild']);
    gulp.watch('assets/js/**/*.js', ['jekyll-rebuild']);
    gulp.watch('assets/lib/**/*.js', ['scripts', 'jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', function(done) {
    runSequence(['pug', 'sass'], ['scripts'], ['browser-sync', 'watch']);
});

gulp.task('build', function(done){
  runSequence(['purge-cdn-cache', 'pug', 'sass'], ['scripts'], ['jekyll-build']);
});
