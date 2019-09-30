 var path = require('path');
 var webpack = require('webpack');
 
const config = {
     entry: './app.js',
     output: {
         filename: './app.bundle.js'
     },
     target: 'node',
     resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
             {
                 test: /\.js$/,
                 loader: ['babel-loader']
             }
         ]
    },
     stats: {
         colors: true
     },
 };
 
 module.exports = config;