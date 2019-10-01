var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV || 'development';

module.exports = [
    {
        entry: './src/server.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/'
        },
        target: 'node',
        mode: env,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    loader: ['file-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css']
        }
    },
    {
        entry: './src/components/browser.js',
        output: {
            path: path.join(__dirname, 'dist/assets'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        target: 'node',
        mode: env,
        node: {
            fs: 'empty',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    loader: ['file-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css']
        }
    }
];
