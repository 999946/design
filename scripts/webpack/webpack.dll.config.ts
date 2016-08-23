import * as path from 'path'
import * as webpack from 'webpack'
import dllLists from './dll-lists'

module.exports = {
    entry: {
        library: dllLists
    },

    output: {
        filename: '[name].dll.js',
        path    : path.join(__dirname, '../../output/static/dll'),
        library : '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../../output/static/dll', '[name]-mainfest.json'),
            name: '[name]'
        })
    ],

    module: {
        loaders: [
            {
                test   : /\.css/,
                loaders: ['style', 'css']
            }, {
                test  : /\.(png|jpg)$/,
                loader: 'url?limit=1024&name=img/[hash:8].[name].[ext]'
            }, {
                test  : /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url?limit=1024&name=font/[hash:8].[name].[ext]'
            }, {
                test  : /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
