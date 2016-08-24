import * as webpack from 'webpack'
import dll from './dll'
import * as config from '../../config'

const alias: {
    [key: string]: string
} = {
    'react-native': 'react-native-web'
}

const webpackConfig = {
    debug: true,

    entry: [
        `webpack-dev-server/client?http://localhost:${config.localWebpackPort}`,
        'webpack/hot/only-dev-server',
        './built/client/main.browser.js'
    ],

    output: {
        path: __dirname,
        publicPath: `http://localhost:${config.localWebpackPort}/`,
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
                loaders: ['react-hot', 'html-path']
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            columns: false
        })
    ]
}

dll.forEach(function (item) {
    webpackConfig.plugins.push(item)
})

export default webpackConfig