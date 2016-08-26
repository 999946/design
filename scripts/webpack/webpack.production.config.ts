import * as webpack from 'webpack'
import * as path from 'path'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSCSS = new ExtractTextPlugin('style.css')
console.log(__dirname)

const alias: {
    [key: string]: string
} = {
    'react-native': 'react-native-web'
}

const webpackConfig = {
    debug: true,

    entry: [
        './built/client/main.browser.js'
    ],

    output: {
        path: 'built-production/static',
        filename: 'bundle.js'
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
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loaders: ['url?limit=3000&name=img/[hash:8].[name].[ext]']
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=3000&name=font/[hash:8].[name].[ext]']
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
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        }),
        new webpack.DllReferencePlugin({
            context : '.',
            manifest: require(path.join(process.cwd(), 'built-production/static/dll/library-mainfest.json'))
        })
    ]
}

export default webpackConfig