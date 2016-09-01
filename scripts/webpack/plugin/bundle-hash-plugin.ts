import * as fs from 'fs'

function BundleHashPlugin() {
}

BundleHashPlugin.prototype.apply = function (compiler: any) {
    compiler.plugin('done', (stats: any)=> {
        const hash = stats.hash.slice(0, 5)
        let html = fs.readFileSync('client/html.ts').toString()
        html = html.replace(/bundle\.([0-9a-zA-Z]){0,5}\\.js/g, `bundle.${hash}.js`)
        fs.writeFileSync('client/html.ts', html)
    })
}

export default BundleHashPlugin as any