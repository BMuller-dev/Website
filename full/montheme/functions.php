<?php

function main_register_assets()
{
    wp_register_style(
        'font_awesome',
        get_template_directory_uri() . '/assets/css/fontawesome/css/all.min.css',
        array(),
        '1.0'
    );
    wp_register_style(
        'main',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        '1.0'
    );

    wp_enqueue_style('main');
    wp_enqueue_style('font_awesome');
}
add_action('wp_enqueue_scripts', 'main_register_assets');
