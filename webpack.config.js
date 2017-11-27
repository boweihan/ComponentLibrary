var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        libraryTarget: 'amd' // need this to load components into requirejs
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};