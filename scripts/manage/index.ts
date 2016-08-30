///<reference path="../../typings/components.d.ts" />

import updater from './updater'
import pusher from './pusher'
import publisher from './publisher'
import router from './router'

const commander = require('commander')

commander.version('1.0.0')
    .option('-u, --update', '更新')
    .option('-p, --push', '提交')
    .option('-pub, --publish', '发布')
    .option('-t, --travis', '持续集成')
    .option('-tk, --token', 'github的token')
    .option('-m, --message [value]', '提交时带的信息', 'quick push')
    .option('-r, --router', '初始化组件路由信息')
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