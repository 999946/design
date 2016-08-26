import * as path from 'path'
import * as webpack from 'webpack'
import dllLists from './dll-lists'

const alias: {
    [key: string]: string
} = {
    'react-native': 'react-native-web'
}

module.exports = {
    entry: {
        library: dllLists
    },

    output: {
        filename: 'static/dll/[name].dll.js',
        path: 'built-production',
        library: '[name]'
    },

    resolve: {
        alias
    },

    plugins: [
        new webpack.DllPlugin({
            path:  'built-production/static/dll/[name]-mainfest.json',
            name: '[name]'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    ],

    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=1024&name=static/dll/img/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url?limit=1024&name=static/dll/font/[hash:8].[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
