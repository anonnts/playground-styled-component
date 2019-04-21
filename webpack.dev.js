const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var ENVIRONMENT = "development"


// Uglify should use with in production and uat only that complied project too slow

var config = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react'] } },
            { test: /\.(png|jpg|gif|ttf|woff|woff2)$/, use: [{ loader: 'file-loader', options: {} }] },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader', 'postcss-loader'],
                    fallback: 'style-loader'
                })
            }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT)
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin({
            filename: 'bundleStyle.css',
            disable: false
        })],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: false,
        historyApiFallback: true
    }
}

module.exports = merge(common, config)