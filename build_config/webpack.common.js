var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './build_config/polyfills.ts',
        'vendor': './build_config/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: helpers.root('tsconfig.json')}
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            // {
            //     test: /\.css$/,
            //     exclude: helpers.root('www', 'css_dist'),
            //     loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            // },
            {
                test: /\.css$/,
                include: helpers.root('node_modules'),
                loader: 'raw-loader!extract-loader!css-loader'
            },
            {
                test: /\.sass/,
                loader: 'raw-loader!extract-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root('www'),
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        // Делаем библиотеки во всех модулях доступным
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        //     // "root.jQuery": "jquery"
        // }),
        // new webpack.ContextReplacementPlugin(/node_modules\/ng2-bootstrap\/node_modules\/moment\/locale/, /ru|en-gb/)
    ]
};

