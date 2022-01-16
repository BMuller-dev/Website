<?php

function main_register_assets()
{
    wp_enqueue_style(
        'font_awesome',
        get_template_directory_uri() . '/assets/css/fontawesome/css/all.min.css',
        array(),
        '1.0'
    );
    wp_enqueue_style(
        'main_css',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        '1.0'
    );
    wp_enqueue_script(
        'main_js',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        1.0,
        true
    );
}
add_action('wp_enqueue_scripts', 'main_register_assets');
