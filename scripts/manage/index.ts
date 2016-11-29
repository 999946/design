///<reference path="../../typings/components.d.ts" />

import updater from './updater'
import pusher from './pusher'
import publisher from './publisher'
import router from './router'
import * as transform from './transform'

const commander = require('commander')

commander.version('1.0.0')
    .option('-u, --update', '更新')
    .option('-p, --push', '提交')
    .option('-pub, --publish', '发布')
    .option('-t, --travis', '持续集成')
    .option('-tk, --token', 'github的token')
    .option('-m, --message [value]', '提交时带的信息', 'quick push')
    .option('-r, --router', '初始化组件路由信息')
    .option('-l, --log', '把 message 记录到更新日志中')
    .option('-a, --absolute', '组件引用路径转为绝对包名')
    .option('-r, --relative', '组件引用路径改为相对路径')
    .parse(process.argv)

if (commander['update']) {
    updater()
}

if (commander['push']) {
    pusher(commander['message'])
}

if (commander['publish']) {
    publisher(commander.args)
}

if (commander['router']) {
    router()
}

// 把所有组件源码引用都改成包名
if (commander['absolute']) {
    transform.toAbsolute()
}

// 把所有组件源码引用都改成相对路径
if (commander['relative']) {
    transform.toRelative()
}