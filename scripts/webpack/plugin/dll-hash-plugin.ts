import * as fs from 'fs'

function DllHashPlugin() {
}

DllHashPlugin.prototype.apply = function (compiler: any) {
    compiler.plugin('done', (stats: any)=> {
        const hash = stats.hash.slice(0, 5)
        let html = fs.readFileSync('client/html.ts').toString()
        html = html.replace(/dll\/library\.([0-9a-zA-Z]){0,5}\.dll\.js/g, `dll/library.${hash}.dll.js`)
        fs.writeFileSync('client/html.ts', html)
    })
}

export default DllHashPlugin as any