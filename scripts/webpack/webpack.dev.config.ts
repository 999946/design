import * as webpack from 'webpack'
import * as config from '../../config'
import * as path from 'path'
import alias from './alias'
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: 5 })

function createHappyPlugin(id: string, loaders: Array<string>) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,

        // disable happy caching with HAPPY_CACHE=0
        cache: process.env.HAPPY_CACHE === '1',

        // make happy more verbose with HAPPY_VERBOSE=1
        verbose: process.env.HAPPY_VERBOSE === '1'
    })
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
                loader: 'happypack/loader?id=js'
            }, {
                test: /\.(scss)/,
                exclude: [/node_modules/],
                loader: 'happypack/loader?id=scss'
            }, {
                test: /\.(css)/,
                loader: 'happypack/loader?id=css'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'happypack/loader?id=image'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loader: 'happypack/loader?id=font'
            }, {
                test: /\.json$/,
                loader: 'happypack/loader?id=json'
            }, {
                test: /\.md$/,
                loader: 'happypack/loader?id=md'
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
            context: '.',
            manifest: require(path.join(process.cwd(), 'built/output/static/dll/library-mainfest.json'))
        }),
        createHappyPlugin('js', ['react-hot', 'html-path']),
        createHappyPlugin('scss', ['style', 'css', 'autoprefixer', 'sass', 'css-path']),
        createHappyPlugin('css', ['style', 'css']),
        createHappyPlugin('image', ['url?limit=3000&name=img/[hash:8].[name].[ext]']),
        createHappyPlugin('font', ['url?limit=3000&name=font/[hash:8].[name].[ext]']),
        createHappyPlugin('json', ['json-loader']),
        createHappyPlugin('md', ['text-loader'])
    ]
}

export default webpackConfig