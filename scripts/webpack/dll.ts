import * as path from 'path'
import * as webpack from 'webpack'

export default [
    new webpack.DllReferencePlugin({
        context : '.',
        manifest: require(path.join(process.cwd(), 'built/output/static/dll/library-mainfest.json'))
    })
]