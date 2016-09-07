import * as path from 'path'
import * as webpack from 'webpack'
import dllLists from './dll-lists'
import * as config from '../../config'
import DllHashPlugin from './plugin/dll-hash-plugin'
import alias from './alias'

module.exports = {
    entry: {
        library: dllLists
    },

    output: {
        filename: '[name].[hash:5].dll.js',
        path: 'built-production/static/dll',
        publicPath: `${path.join(config.staticPathPrefixProduction, config.publicPath).replace(/http:\//g, 'http://')}/dll/`,
        library: '[name]'
    },

    resolve: {
        alias
    },

    plugins: [
        new webpack.DllPlugin({
            path: 'built-production/static/dll/[name]-mainfest.json',
            name: '[name]'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        }),
        // 将 html 文件的 Dll hash 替换
        new DllHashPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: `url?limit=1024&name=img/[name].[hash:5].[ext]`
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: `url?limit=1024&name=font/[name].[hash:5].[ext]`
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
