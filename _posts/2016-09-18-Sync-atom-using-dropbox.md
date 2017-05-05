---
layout: blog-single
title:  "Sync Atom with Dropbox"
date:   2016-09-18
author: Jason
thumbnail: /assets/images/posts/sync-atom
excerpt: Syncing your code editor settings so everything is just how you like it no matter the computer.
categories:
- Programing
- Web Development
meta: Learn how to keep your projects and tools in sync using Dropbox. From the Jason M Design blog.
comments: true
---

![Sync Atom with Dropbox](/assets/images/posts/sync-atom.jpg)

This is a quick tutorial on how to sync the Atom code editor setup between PC’s running windows. Using dropbox or any other cloud storage service.

Using a laptop that I can take between clients work and home is great, but I also love the benefits that a standard desktop offers me. So I use both as I am sure many many others do. I do front-end development and design, that’s my job. I rely on my code editor for daily tasks. Switching between two PC’s with slightly different configurations is an annoyance that I don’t want to deal with.

I used a sync extension for Atom which helped the problem greatly and saved me a lot of time. This worked well but it wasn’t a perfect solution. My plugins would need updating on both computers whenever I fired up Atom. Some settings for whatever reason just didn’t copy across with the sync plugin.

This is why I decided to come up with my own better solution to the problem. The technique I am going to describe can be used for a many of apps and programs, so keep it in mind for other problems like this also.

What you’ll need
-

* Dropbox (or another cloud storage service) set-up on both PC’s
* SymLink Creator (this can also be done in command prompt but I have found the GUI to be extremely helpful) which can be found here
* Long Path Eraser (This may not be needed but it’s a useful tool to be aware of anyway) found here
* A zip tool like 7 Zip

What we are going to be doing
-

The idea behind what we are doing is pretty simple. If you have done any research into this topic before I am sure you will have come across similar methods.

We are going to be moving the Atom packages, settings and extensions folder to our cloud storage (Dropbox). Then linking the default locations for this on both computers to this one folder.

Moving the File
-

To start our process we need to move the Atom folder from its current location. It is kept in your user’s current directory. On windows, an easy shortcut to get here is to paste the following code into the bar in any explorer window.

~~~~
%UserProfile%
~~~~

This in your user’s directory you should see a file titled .atom this is the one we need. I had to use 7 Zip to compress the folder to copy it across to Dropbox, as the file paths were too long to use the normal copy-paste operation.

I zipped the file and then moved the zipped file over to Dropbox. It doesn’t matter where you place the file in Dropbox but I prefer somewhere that makes sense and is out of the way.

From here you will need to extract the folder making sure to select the option “extract to .atom/”. This will add your folder to Dropbox which will keep it in sync for us.

Linking the folders
-

This is where the magic happens. We are going to link the old file path to the new path that will be in sync. This will need to be done on both computers.

The first thing we need to do is delete the old .atom folder. For me because the file path names were too long. I needed to use the Long Path Eraser Tool at this point because the file names were too long for windows to handle natively. If you have different settings on the two PC’s only the settings and extensions from the copied folder will be kept.

After deleting the old .atom folders in your user directories, fire up Symlink Creator.

![Symlink Settings](/assets/images/posts/sync-settings.jpg)

In the link folder section, you are going to need to put the file path that we took the original .atom folder from. For me, this was C:\Users\Jason. You will also need to name the link .atom

In the destination folder, you will need to put the path to the folder in Dropbox. Remembering that these paths may be different on your different PCs.

Double check that you have selected “folder symbolic link” as the type at the top, and symbolic link in the destination folder down the bottom.

From here you can simply click create a link and that’s it you’re finished. Remember that this needs to be done on both computers.
