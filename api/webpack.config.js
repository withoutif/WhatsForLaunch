var webpack = require('webpack');
var env = process.env.NODE_ENV || 'development';

 module.exports = {
     entry: './app.js',
     output: {
         filename: './app.bundle.js'
     },
     target: 'node',
     resolve: {
        extensions: ['.js', '.json']
    },
     mode: env,
     node: {
         fs: 'empty'
     },
    module: {
        rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: ['babel-loader']
             }
         ]
    }
 };