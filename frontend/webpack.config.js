var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: ['css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            port: '3000',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            mode: 'development'
        }
    },
    {
        plugins: [
                extractPlugin = new MiniCssExtractPlugin({
                filename: 'index.css',
            }),
        ],
        entry: './src/components/browser.js',
        output: {
            path: path.join(__dirname, 'dist/assets'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        target: 'node',
        mode: 'development',
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
                    loader: ['file-loader', 'url-loader']
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                }
            ]
        }
    }
];