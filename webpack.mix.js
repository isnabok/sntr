const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.scripts(
    [
        'resources/js/email-decode.min.js',
        'resources/js/modernizr-3.6.0.min.js',
        'resources/js/jquery-3.6.0.min.js',
        'resources/js/jquery-migrate-3.3.0.min.js',
        'resources/js/bootstrap.bundle.min.js',
        'resources/js/slick.js',
        'resources/js/jquery.syotimer.min.js',
        'resources/js/waypoints.js',
        'resources/js/wow.js',
        'resources/js/jquery-ui.js',
        'resources/js/perfect-scrollbar.js',
        'resources/js/magnific-popup.js',
        'resources/js/select2.min.js',
        'resources/js/counterup.js',
        'resources/js/jquery.countdown.min.js',
        'resources/js/images-loaded.js',
        'resources/js/isotope.js',
        'resources/js/scrollup.js',
        'resources/js/jquery.vticker-min.js',
        'resources/js/jquery.theia.sticky.js',
        'resources/js/jquery.elevatezoom.js',
        'resources/js/main.js',
        'resources/js/js.js'
    ],
    'public/js/all.js'
).version();

mix.styles(
    [
        'resources/css/animate.min.css',
        'resources/css/normalize.css',
        'resources/css/bootstrap.min.css',
        'resources/css/uicons-regular-straight.css',
        'resources/css/jquery-ui.css',
        'resources/css/magnific-popup.css',
        'resources/css/select2.min.css',
        'resources/css/slick.css',
        'resources/css/perfect-scrollbar.css',
        'resources/css/style.css'
    ],
    'public/css/all.css'
).version();