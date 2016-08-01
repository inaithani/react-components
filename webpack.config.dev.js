var path = require('path');
var webpack = require('webpack');
var PATHS = {
    images : path.join (__dirname, 'images'),
    fonts  :  path.join (__dirname, 'fonts')
};


var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './app.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/

            },
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader",
                exclude: /node_modules/
            },
            {
              test: /\.(jpg|png)$/,
              loader: 'url?limit=250000',
              include: PATHS.images
             
            },
            {
              test: /\.woff$/,
              loader: 'url?limit=50000',
              include: PATHS.fonts
            }
        ]
    }
};

module.exports = config;
