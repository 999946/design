import * as koa from 'koa'
import * as config from '../config'
import * as staticCache from 'koa-static-cache'
import * as path from 'path'
import templateHtml from '../client/html'
import * as trimHelper from '../utils/trim-string'

const app = new koa()
const isProduction = process.argv[2] === '--production'

const proxy = require('koa-proxy')
import * as Router from 'koa-router'
const router = new Router()

// 编译后的静态文件路径
const builtStaticPath = isProduction ? 'built-production/static' : 'built/output/static'

// 设置静态资源缓存
app.use(staticCache(`${builtStaticPath}`, {
    prefix: '/static',
    maxAge: 365 * 24 * 60 * 60,
    buffer: true,
    gzip: true,
    usePrecompiledGzip: true
}))

// 监听错误
app.on('error', (err: any) => {
    if (err) {
        console.log('error:', err)
    }
})

// 抓住未捕获的错误
process.on('uncaughtException', (err: any)=> {
    if (err) {
        console.log('error:', err)
    }
})

router.all(path.join(config.apiPrefix, '/*'), proxy({
    host: config.apiHost
}))

router.get('*', function *(): any {
    this.type = 'text/html; charset=utf-8'
    this.body = templateHtml
})

app.use(router.routes())

module.exports = app.listen(config.localPort)