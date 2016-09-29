const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'jquery': './node_modules/jquery/dist/',
    'bootstrap': './node_modules/bootstrap-sass/assets/',
    'fontawesome': './node_modules/font-awesome/'
}

elixir(mix => {
    mix.sass('app.scss')
       .sass(paths.fontawesome + 'scss/font-awesome.scss')
       .less('getonatop.less')
       .scripts([
            paths.jquery + "jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js"
        ]);

    mix.copy(paths.fontawesome + 'fonts', 'public/fonts');
});
