Item Player
===========

1. Introduction
---------------

This is a WordPress plugin that will display a [SoundCloud](http://www.soundcloud.com)-like HTML5 audio player (falling back to Flash when needed) in place of PowerPress' player.

It uses [SoundManager 2](http://www.schillmania.com/projects/soundmanager2) javascript library to play the audio.

It is released under the [GNU GENERAL PUBLIC LICENSE v3](http://www.gnu.org/licenses/gpl-3.0.txt).

2. Requirements
---------------

The only requirement is to have some kind of image to put under the playhead. To have a SoundCloud-like look, you will need an image that represent the waveform of the audio file associated with the player.
The waveform needs to be drawn with a transparent color, over the background of your choice, but preferably the same color as your site's background. Such an image can be generated from an ogg file using my image generator. There will be a link to this tool once it's online.

If you have PowerPress installed, you can optionally replace it's player with this one. See the _"Usage"_ section later in this document.

3. Installation
---------------

Same as any other WordPress plugins.

4. Usage
--------

There are two ways to use this player :

* Insert the shortcode anywhere in a post ;
* Replace PowerPress' player.

4.1 **Inserting the shortcode**

This is not totaly implemented at the time of this writting (Dec. 7th, 2012)

4.2 **Replacing PorwerPress' player**

If you have PowerPress installed and want to replace it's player with this one, you will have to add a new custom field to each post in which you want to replace the player.

This custom field has to be called **waveform** and it's value has to be a URL to the image you want to use for the player.

5. Customization
----------------

You can customize the look of the player using those selectors :

    .itemplayer {
    	/* This drives the whole player dimensions. */
    	/* Change it to 16px and everything will double in size */
    	font-size: 8px; 
    	border: 1px solid #CCCCCC;
    }
    
    .itemplayer-controls {
    	border-bottom: 1px solid #DDDDDD;
    }
    
    .itemplayer-wrapper {
    	border-right: 1px solid #DDDDDD;
    }
    
    .itemplayer-play {
    	border-color: #2c2c2c;
    }
    
    .itemplayer-play::before {
    	border-left-color: #2C2C2C;
    }
    
    .itemplayer-pause {
    	border-color: #2c2c2c;
    }
    
    .itemplayer-pause::after {
    	background: #2C2C2C;
    }
    
    .itemplayer-volume-background {
    	background-color: #2C2C2C;
    }
    
    .itemplayer-volume-indicator {
    	background-color: #E81D1D;
    }
    
    .itemplayer-volume {
    	border-top-color: white;
    	border-left-color: white;
    }
    
    .itemplayer-volume-cursor {
    	background-color: #CCCCCC;
    	border-color: black;
    }
    
    .itemplayer-clock {
    	border-right-color: #DDDDDD;
    	border-left-color: #DDDDDD;
    }
    
    .itemplayer-scrubber {
    	background-color: #2C2C2C;
    }
    
    .itemplayer-progress {
    	background-color: #E81D1D;
    	border-right-color: black;
    }
    
    .itemplayer-playhead {
    	border-right-color: black;
    }

6. Disclaimer
-------------

This documentation is in no way finished, neither is the player, actually.

Use it at your own risks, I'm not reponsible if your site crashes !