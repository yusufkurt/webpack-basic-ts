const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let config = {
    mode: 'development',
    context: path.resolve('src'),
    entry: './ts/index.ts',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'Welcome', template: 'index.html' })
    ],
    devServer: {
        port: 9000,
        contentBase: path.resolve('src'),
        watchContentBase: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
};

module.exports = config;