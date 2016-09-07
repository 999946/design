import * as webpack from 'webpack'
import * as path from 'path'

import * as config from '../../config'
import BundleHashPlugin from './plugin/bundle-hash-plugin'
import alias from './alias'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSCSS = new ExtractTextPlugin('style.css')

const webpackConfig = {
    debug: true,

    entry: [
        './built/client/main.browser.js'
    ],

    output: {
        path: 'built-production/static',
        publicPath: `${path.join(config.staticPathPrefixProduction, config.publicPath).replace(/http:\//g, 'http://')}/`,
        filename: 'bundle.[hash:5].js?',
    },

    resolve: {
        alias
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                loaders: ['babel', 'html-path']
            }, {
                test: /\.(scss)/,
                exclude: [/node_modules/],
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path']
            }, {
                test: /\.(css)/,
                loaders: ['style', 'css']
            }, {
                test: /\.(png|jpg|gif)$/,
                loaders: ['url?limit=3000&name=img/[name].[hash:5].[ext]']
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=3000&name=font/[name].[hash:5].[ext]']
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    },

    plugins: [
        extractSCSS,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new BundleHashPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        }),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(path.join(process.cwd(), 'built-production/static/dll/library-mainfest.json'))
        })
    ]
}

export default webpackConfig