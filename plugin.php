<?php
/**
 * Plugin Name: story-slider — CGB Gutenberg Block Plugin
 * Plugin URI: https://uwkc.org
 * Description: story-slider — is a Gutenberg plugin created via create-guten-block.
 * Author: United Way of King County
 * Author URI: https://uwkc.org
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
