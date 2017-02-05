var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var pug         = require('gulp-pug');
var cache       = require('gulp-cache');
var uncss       = require('gulp-uncss');
var plumber     = require('gulp-plumber');
var gutil       = require('gulp-util');
var imageResize = require('gulp-image-resize');
var imagemin    = require('gulp-imagemin');
var jpegtran    = require('imagemin-jpegtran');
var tinypng     = require('gulp-tinypng');
var rename      = require('gulp-rename');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Better Error Handeling
 */
var gulp_src = gulp.src;
gulp.src = function() {
 return gulp_src.apply(gulp, arguments)
   .pipe(plumber(function(error) {
     // Output an error message
     gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
     // emit the end event, to properly end the task
     this.emit('end');
   })
 );
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'}).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
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
gulp.task('sass', function () {
    return gulp.src('assets/css/*.sass')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

/**
 * UNCSS
 */
 gulp.task('uncss', function () {
     return gulp.src('assets/css/1-tools/uncss-source/**/*')
         .pipe(uncss({
             html: ['_site/**/*.html'],
             ignore: [/\w\.in/,
                    ".fade",
                    ".collapse",
                    ".collapsing",
                    /(#|\.)navbar(\-[a-zA-Z]+)?/,
                    /(#|\.)dropdown(\-[a-zA-Z]+)?/,
                    /(#|\.)(open)/,
                    ".modal",
                    ".modal.fade.in",
                    ".modal-dialog",
                    ".modal-document",
                    ".modal-scrollbar-measure",
                    ".modal-backdrop.fade",
                    ".modal-backdrop.in",
                    ".modal.fade.modal-dialog",
                    ".modal.in.modal-dialog",
                    ".modal-open",
                    ".in",
                    ".modal-backdrop",
                    ".embed-responsive",
                    ".embed-responsive-16by9",
                    ".embed-responsive-item",
                    ".fa-play",
                    "fa-pause"]
         }))
         .pipe(gulp.dest('assets/css/1-tools/uncss'));
 });

/**
 * Custom Gulp Task
 */
gulp.task('pug', function(){
  return gulp.src('_pugfiles/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('_includes'));
});

/**
 * Image Optimization Task
 */
 gulp.task('image-op-jpeg', ['large-image','medium-image', 'small-image', 'src-image'], function(done){
   browserSync.notify(messages.jekyllBuild);
   return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
       .on('close', done);
       browserSync.reload();
 });

 gulp.task('image-op-png', ['large-image-png','medium-image-png', 'small-image-png', 'src-image-png'], function(done){
   browserSync.notify(messages.jekyllBuild);
   return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
       .on('close', done);
       browserSync.reload();
 });

 gulp.task('large-image', function() {
     return gulp.src('assets/images/src/**/*.+(jpeg|jpg)')
         .pipe(imageResize({
             width: 1600
         }))
         .pipe(imagemin({
             progressive: true,
             use: [jpegtran()]
         }))
         .pipe(rename({
             suffix: '-large'
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('medium-image', function() {
     return gulp.src('assets/images/src/**/*.+(jpeg|jpg)')
         .pipe(imageResize({
             width: 800
         }))
         .pipe(imagemin({
             progressive: true,
             use: [jpegtran()]
         }))
         .pipe(rename({
             suffix: '-medium'
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('small-image', function() {
     return gulp.src('assets/images/src/**/*.+(jpeg|jpg)')
         .pipe(imageResize({
             width: 400
         }))
         .pipe(imagemin({
             progressive: true,
             use: [jpegtran()]
         }))
         .pipe(rename({
             suffix: '-small'
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('src-image', function() {
     return gulp.src('assets/images/src/**/*.+(jpeg|jpg)')
         .pipe(imagemin({
             progressive: true,
             use: [jpegtran()]
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('large-image-png', function() {
     return gulp.src('assets/images/src/**/*.+(png)')
         .pipe(imageResize({
             width: 1600
         }))
         .pipe(tinypng('rzSRVam-7qL8rvKyQp9Pl_ce4w3EqGVb'))
         .pipe(rename({
             suffix: '-large'
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('medium-image-png', function() {
     return gulp.src('assets/images/src/**/*.+(png)')
         .pipe(imageResize({
             width: 800
         }))
         .pipe(tinypng('rzSRVam-7qL8rvKyQp9Pl_ce4w3EqGVb'))
         .pipe(rename({
             suffix: '-medium'
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('small-image-png', function() {
     return gulp.src('assets/images/src/**/*.+(png)')
         .pipe(imageResize({
             width: 400
         }))
         .pipe(tinypng('rzSRVam-7qL8rvKyQp9Pl_ce4w3EqGVb'))
         .pipe(rename({
             suffix: '-small'
         }))
         .pipe(gulp.dest('assets/images/'))
 });

 gulp.task('src-image-png', function() {
     return gulp.src('assets/images/src/**/*.+(png)')
         .pipe(tinypng('rzSRVam-7qL8rvKyQp9Pl_ce4w3EqGVb'))
         .pipe(gulp.dest('assets/images/'))
 });

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/css/**/*.sass', ['sass']);
    gulp.watch(['_pugfiles/**/*.pug'], ['pug']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*', '_posts/*.md', '_portfolio/**/*.md', '_testimonials/**/*.md', 'portfolio/*.html', 'about-us/*.html', 'our-services/*.html', 'blog/*.html'], ['jekyll-rebuild', 'uncss']);
    gulp.watch('assets/js/**/*.js', ['jekyll-rebuild']);
    gulp.watch(['assets/images/src/**/*.+(jpg|jpeg)'], ['image-op-jpeg']);
    gulp.watch(['assets/images/src/**/*.png'], ['image-op-png']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'pug', 'watch', 'uncss']);

gulp.task('build', ['pug', 'uncss', 'sass', 'image-op', 'jekyll-build']);
