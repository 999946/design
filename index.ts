import * as path from 'path'
const commander = require('commander')

commander.version('1.0.0')
    .option('-i, --init', '把项目初始化到能用的程度')
    .parse(process.argv)

if (commander['init']) {
    console.log(__dirname)
}