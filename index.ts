#!/usr/bin/env node

import * as path from 'path'
import { execSync } from 'child_process'
import * as commander from 'commander'

/**
 * 根据后缀找文件
 */
const getFilesBySuffix = (suffix: string, modulePath: string): Array<string> => {
    let files = execSync(`find ${modulePath} -name "*.${suffix}"`).toString().split('\n')
    files = files.filter((item) => {
        return item !== ''
    })
    return files
}

/**
 * 把引用还原
 */

commander.version('1.0.0')
    .option('-i, --init', '把项目初始化到能用的程度')
    .parse(process.argv)

if (commander['init']) {
    // 找到当前目录下所有 ts,tsx 文件
    const tsFilePaths = getFilesBySuffix('ts', process.cwd())
    const tsxFilePaths = getFilesBySuffix('tsx', process.cwd())
    const allTsFilePaths = tsFilePaths.concat(tsxFilePaths)

    allTsFilePaths.forEach(tsFilePath => {
        console.log(tsFilePath)
    })
}