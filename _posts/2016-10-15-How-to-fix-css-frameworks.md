---
layout: blog-single
title:  "What's wrong with CSS Frameworks, and how to fix them"
date:   2016-10-15
author: Jason
thumbnail: /assets/img/posts/css-frameworks
excerpt: CSS Frameworks add bloat to your sites. Find out how to minimize this but still use these great tools.
categories:
- Programing
- Web Development
meta: Minimize the bloat associated with using CSS frameworks by adding one simple step to your workflow. By Jason M Design.
---

![Fixing CSS Frameworks](/assets/img/posts/css-frameworks.jpg)

Many designers and developers use frameworks like bootstrap or foundation. They are great at speeding up the development process and allowing developers to write code that is easier for others to work on and maintain.

For all the benefits that a framework like bootstrap offers it has a dark side. It fills your projects with bloat. But it doesn’t have to be this way. There are two ways of getting around this. The first is using the SASS version of bootstrap and only including the parts that you use. A good alternative but I wanted something more hands free. I can write code with anything from bootstrap and not worry about making sure I include the proper code in my SASS build.

Enter UnCSS a tool that will analyze your html and remove any unused CSS selectors from your stylesheets. All the benefits of a full framework, without needing to worry about bloat or adding SASS components.

Getting Started with UnCSS
-

First you are going to need to have a gulp or grunt workflow setup and honestly if you are reading this I hope you already do. If you don’t however head over to [CSS Tricks Gulp for beginners](//css-tricks.com/gulp-for-beginners/) and you will be up and running in no time.

Once you have your gulp workflow worked out, simply install gulp-uncss by running the following command in your project folder.

~~~
npm install gulp-uncss --save-dev
~~~

With UnCSS installed we are ready to set up our task. To start with you are going to need to declare UnCSS.
~~~
var uncss = require(‘gulp-uncss’);
~~~

The way that I have UnCSS setup is to read css files from a source folder, check them against the html files that make up my site and then remove the unused selectors and place the bloat free css in another folder which I then import with my SASS command.

My UnCSS task looks as follows:

~~~
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
                    ".modal-backdrop"]
         }))
         .pipe(gulp.dest('assets/css/1-tools/uncss'));
 });
 ~~~

First it gets any css files in the source directory. Next it will run UnCSS against the html files in my sites directory.

You will note here that I have a large number of ignores present. This is because UnCSS isn’t quite smart enough to know when a class is added after the initial html, via something like jquery. This is a list of the styles that bootstrap add through js to make things like the responsive nav and modal to work. If you don’t use these features though, you won't need to worry about this.

Once UnCSS has run it will pipe the outputted css back into a separate folder to be linked to or included in SASS from there.

Using this method I was able to reduce bootstrap from 6760 lines of uncompressed css and 150kb to 1607 lines and 35kb this is a huge saving, and when the code is minified for the production site it’s even more substantial.

I hope that this has helped you to use frameworks more effectively and efficiently in your own design and development work.
