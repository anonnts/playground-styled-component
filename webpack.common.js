const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './index'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/'),
            Containers: path.resolve(__dirname, 'src/containers/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Store: path.resolve(__dirname,'src/store/')
        }
    },
}
