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

    let match: Array<string>
    while ((match = regex.exec(source)) != null) {
        // 引用的路径
        const importPath = match[2] as string
        console.log(path.join(filePath, importPath))
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