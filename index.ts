#!/usr/bin/env node

import * as path from 'path'
import * as fs from 'fs'
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
const repairImportPath = (filePath: string) => {
    const source = fs.readFileSync(filePath).toString()
    const regex = /import\s+[a-zA-Z{},\s\*_\$]*(from)?\s?\'([^']+)\'/g

    // 拿前文件路径和根路径长度相减，得到相对层数
    const relativeLayer = filePath.split('/').length - process.cwd().split('/').length

    let match: Array<string>
    while ((match = regex.exec(source)) != null) {
        // 引用的路径
        const importPath = match[2] as string
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            // 相对路径
            const importPathSplit = importPath.split('/')

            if (importPathSplit.length <= relativeLayer) {
                continue
            }

            // 如果把层级去了，还有 ../ 开头，那一定是引相对组件
            let relativeLayerCopy = relativeLayer
            while (relativeLayerCopy > 0) {
                importPathSplit.unshift()
                relativeLayerCopy--
            }
            if (importPathSplit[0] === '..') {
                console.log('引用组件', importPathSplit[1], importPathSplit[2])
            }
        } else {
            console.log('引了 npm 包，不做处理', importPath)
        }
    }
}

commander.version('1.0.0')
    .option('-i, --init', '把项目初始化到能用的程度')
    .parse(process.argv)

if (commander['init']) {
    // 找到当前目录下所有 ts,tsx 文件
    const tsFilePaths = getFilesBySuffix('ts', process.cwd())
    const tsxFilePaths = getFilesBySuffix('tsx', process.cwd())

    tsFilePaths.concat(tsxFilePaths).forEach(tsOrTsxFilePath => {
        repairImportPath(tsOrTsxFilePath)
    })

    // 执行 npm install
    // execSync('npm install')
}