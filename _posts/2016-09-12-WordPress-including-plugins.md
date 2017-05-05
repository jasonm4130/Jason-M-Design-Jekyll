---
layout: blog-single
title:  "Include PLugins in WordPress Theme"
date:   2016-09-12
author: Jason
thumbnail: /assets/images/posts/advanced-custom-fields
excerpt: A great way to use a plugin to enhance your WordPress development potential and speed.
categories:
- WordPress
- Web Development
meta: The right way to include a plugin you need for you WordPress theme. from the blog at Jason M Design.
comments: true
---

![Advanced Custom Fields](/assets/images/posts/advanced-custom-fields.jpg)

Today I was talking with a friend in a Slack community that I am a part of. He is working on building his first custom WordPress website. I was talking with him about how he was doing it, and how I have built websites in the past. The topic turned to the plugins he was using. As it would be the tools he was using were similar to those I had used to build sites.

We talked about them, and I shared how I had included Advanced Custom Fields with my theme. I felt it made a more concise and eloquent solution than having to install the plugin when the theme was installed. He had never heard of doing this, and I remember it took me a while to figure out how to do this myself. So in the hope of lessening someone’s learning curve, I am sharing with you now.

So to get us started, why would you want to include a plugin with a theme rather than installing it separately? Well, there are arguments for and against, I will just talk about why I made my choice. I think a plugin that adds functionality and is essential to the theme you are building should be included with it. If it’s needed for the theme to function then you would never have an instance with the theme installed and not the plugin, so it seems silly to have to install both.

As I walk you through this process I will be using the advanced custom fields plugin as an example, but the process should be similar if not the same for other plugins too. If you don’t know what Advanced Custom Fields is, you should. Every WordPress developer at some stage has used it, wanted to use it, should have used it, or will use it.

So let’s get started. First off you are going to need to get the plugin downloaded you can do this from the WordPress [plugin directory](https://wordpress.org/plugins/advanced-custom-fields/). Or from the advanced custom fields [website](https://www.advancedcustomfields.com/).

With this downloaded, we need to extract the contents of the zip file and place it somewhere within the theme folder. For me, I chose /inc/plugins I also renamed the advanced custom fields folder to just ACF to make it easier to reference later.

![Advanced Custom Fields Folder](/assets/images/posts/acf-folder.jpg)

With the contents of the plugin installed we need to include the main php file of the plugin in the functions.php of our theme.

To do this we go to add some code to our functions.php (Obviously)

~~~~
// 1. customize ACF path
add_filter(‘acf/settings/path’, ‘my_acf_settings_path’);

function my_acf_settings_path( $path ) {

 // update path
 $path = get_stylesheet_directory() . ‘/inc/plugins/acf/’;

 // return
 return $path;

}
~~~~

This first bit of code changes the path for the advanced custom fields settings. Notice the only part that you will need to change from this is the $path variable, where ‘/inc/plugins/acf/’ should represent your folder structure.

The next section of code we add does a similar thing to that above except it changed the location of the directory for ACF. Again the only part that requires changing is the $dir path to represent your folder structure.

~~~~
// 2. customize ACF dir
add_filter(‘acf/settings/dir’, ‘my_acf_settings_dir’);

function my_acf_settings_dir( $dir ) {

 // update path
 $dir = get_stylesheet_directory_uri() . ‘/inc/plugins/acf/’;

 // return
 return $dir;

}
~~~~

These two parts of code above are specific for advanced custom fields and for other plugins may not be required, or they may require different filters to be passed to them.

This next piece of code will be similar if not the same for including every plugin within your theme. In it we actually include the main php file of the plugin. In this case that is acf.php. Here again you will need to change the code to match your folder structure, and the name of the php file we are including to match whatever plugin it is that you are including.

~~~~
// 3. Include ACF
include_once( get_stylesheet_directory() . ‘/inc/plugins/acf/acf.php’ );
~~~~

If all this has gone well you should be able to save your functions.php and reload your browser and have advanced custom fields included with your theme.
