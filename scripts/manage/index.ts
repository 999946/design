import updater from './updater'
import pusher from './pusher'
import publisher from './publisher'

const commander = require('commander')

commander.version('1.0.0')
    .option('-u, --update', '更新')
    .option('-p, --push', '提交')
    .option('-p, --publish', '发布')
    .option('-t, --travis', '持续集成')
    .option('-tk, --token', 'github的token')
    .option('-m, --message [value]', '提交时带的信息', 'quick push')
    .parse(process.argv)

if (commander['update']) {
    updater(commander)
}

if (commander['push']) {
    pusher(commander)
}

if (commander['publish']){

}