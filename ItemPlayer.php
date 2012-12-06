<?php
/*
Plugin Name: Item Player
Plugin URI: http://yma.dk/wordpress/itemplayer/
Description: HTML5 "soundcloud-like" audio player. 
Version: 1.0
Author: Yannick Mauray
Author URI: http://yma.dk/wordpress
Contributors:
Yannick Mauray (Euterpia Radio)

Credits:

Copyright 2012 Yannick Mauray

License: GPL v3 (http://www.gnu.org/licenses/gpl-3.0.txt)
*/

/*
 * Encoding: UTF-8
*/

function itemplayer_shortcode($atts, $content = null) {

	extract(shortcode_atts(array(
			'item' => ''
	), $atts));

	if ($item == 'undefined') return;
	
$html  = '<div class="itemplayer" enclosure="' . $item . '">';
$html .= '<div class="itemplayer-controls"><div class="itemplayer-wrapper"><div class="itemplayer-play"></div><div class="itemplayer-pause"></div></div><div class="itemplayer-volume-wrapper"><div class="itemplayer-volume-background"></div><div class="itemplayer-volume-indicator"></div><div class="itemplayer-volume"><!-- div class="itemplayer-volume-cursor"></div --></div></div><div class="itemplayer-clock"><span class="itemplayer-current">00:00</span>&nbsp;/&nbsp;<span class="itemplayer-total">00:00</span></div></div>';
$html .= '<div class="itemplayer-scrubber"><div class="itemplayer-progress"></div><div class="itemplayer-waveform" style="background-image: url(' . str_replace('mp3', 'png', $item) . ');"></div><div class="itemplayer-playhead"></div></div>';
$html .= '</div>';

return $html;
}

function itemplayer_enqueue_scripts() {
	wp_enqueue_style('itemplayer-styles', plugins_url('ItemPlayer.css', __FILE__));
	
	wp_register_script('itemplayer-scritps', plugins_url('ItemPlayer.js', __FILE__), array('jquery'));
	$translation_array = array(
			'swf' => plugins_url('swf', __FILE__)
	);
	wp_localize_script('itemplayer-scritps', 'itemplayer_params', $translation_array);
	wp_enqueue_script('itemplayer-scritps');
}

add_shortcode('itemplayer', 'itemplayer_shortcode');
add_action('wp_enqueue_scripts', 'itemplayer_enqueue_scripts');

?>
