import * as koa from 'koa'
import * as config from '../config'
import * as staticCache from 'koa-static-cache'
import templateHtml from '../client/html'

const app = new koa()

// 设置静态资源缓存
app.use(staticCache('built/output/static', {
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

app.use(function *(): any {
    this.type = 'text/html; charset=utf-8'
    this.body = templateHtml
})

module.exports = app.listen(config.localPort)