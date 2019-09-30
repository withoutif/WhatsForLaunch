 var path = require('path');
 var webpack = require('webpack');
 
const config = {
     entry: './server.js',
     output: {
         filename: './server.bundle.js'
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