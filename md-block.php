<?php
/**
 * Plugin Name:       MD Block
 * Description:       A Gutenberg Block that allow to write markdown in Block Editor
 * Version:           0.1.1
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            Mehedi Hasan
 * Author URI:        https://mehedi.im
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       md-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets, so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

require_once __DIR__ . '/includes/Markdown.php';

function create_block_md_block_block_init() {
    register_block_type(__DIR__ . '/build', [
        'render_callback' => 'md_block_renderer',
        'attributes' => array(
            'content' => array(
                'type' => 'string'
            )
        )
    ]);
}

add_action( 'init', 'create_block_md_block_block_init' );


/**
 * Render
 *
 * @param $attributes
 * @return string
 */
function md_block_renderer($attributes) {
    return '<div class="md-block-render">' . \Mehedi\MDBlock\Markdown::getInstance()->setMarkupEscaped( true )->parse( $attributes['content'] ) . '</div>';
}
