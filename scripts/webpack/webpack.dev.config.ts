import * as webpack from 'webpack'
import * as config from '../../config'
import * as path from 'path'

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
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            columns: false
        }),
        new webpack.DllReferencePlugin({
            context : '.',
            manifest: require(path.join(process.cwd(), 'built/output/static/dll/library-mainfest.json'))
        })
    ]
}

export default webpackConfig