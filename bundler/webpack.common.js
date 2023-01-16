const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: "aboutme.html",
            template: path.resolve(__dirname, '../src/aboutme.html'),
            minify: true,
            chunks: ['aboutme']
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: path.resolve(__dirname, '../src/contact.html'),
            minify: true,
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: "portfolio.html",
            template: path.resolve(__dirname, '../src/portfolio.html'),
            minify: true,
            chunks: ['portfolio']
        }),
        new HtmlWebpackPlugin({
            filename: "internship.html",
            template: path.resolve(__dirname, '../src/internship.html'),
            minify: true,
            chunks: ['internship']
        }),
        new HtmlWebpackPlugin({
            filename: "404page.html",
            template: path.resolve(__dirname, '../src/404page.html'),
            minify: true,
            chunks: ['404page']
        }),
        new HtmlWebpackPlugin({
            filename: "mystory.html",
            template: path.resolve(__dirname, '../src/mystory.html'),
            minify: true,
            chunks: ['mystory']
        }),
        new MiniCSSExtractPlugin()
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use:
                [
                    'html-loader'
                ]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext]'
                }
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/fonts/[hash][ext]'
                }
            }
        ]
    }
}
