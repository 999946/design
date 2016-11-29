import * as config from '../../config'
import components from '../../components'
import { exec, execSync } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import * as _ from 'lodash'
import { getPackageName, isCustomPackageName, getCategoryAndComponentNameByPackageName } from './utils/component-helper'

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
 * 把引用变成绝对路径
 */
const absoluteImportPath = (component: Components.ComponentConfig, category: Components.Category, filePath: string) => {
    let source = fs.readFileSync(filePath).toString()
    const regex = /import\s+([a-zA-Z{},\s\*_\$]*)(from)?\s?\'([^']+)\'/g

    // 拿前文件路径和根路径长度相减，得到相对层数
    const relativeLayer = filePath.split('/').length - process.cwd().split('/').length

    source = source.replace(regex, (substring: string, ...match: Array<string>) => {
        // 引用的路径
        const importPath = match[2] as string
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            const filePathSplit = filePath.split('/')
            filePathSplit.pop()
            const filePathDir = filePathSplit.join('/')
            const importFullPath = path.join(filePathDir, importPath)
            const importFullPathSplit = importFullPath.split('/')

            if (importFullPathSplit[1] === category.name && importFullPathSplit[2] === component.name) {
                // 如果引用是当前组件自己的文件，不做处理
                return substring
            } else {
                const importName = _.trim(match[0])
                const packageName = getPackageName(importFullPathSplit[1], importFullPathSplit[2])
                if (importName === '') {
                    return `import '${packageName}'`
                } else {
                    return `import ${importName} '${packageName}'`
                }
            }
        } else {
            // 引了 npm 包，不做处理
            return substring
        }
    })

    // 保存文件到本地
    fs.writeFileSync(filePath, source)
}

/**
 * 把引用变成相对路径
 */
const relativeImportPath = (component: Components.ComponentConfig, category: Components.Category, filePath: string) => {
    let source = fs.readFileSync(filePath).toString()
    const regex = /import\s+([a-zA-Z{},\s\*_\$]*)(from)?\s?\'([^']+)\'/g

    // 拿前文件路径和根路径长度相减，得到相对层数
    const relativeLayer = filePath.split('/').length - process.cwd().split('/').length

    source = source.replace(regex, (substring: string, ...match: Array<string>) => {
        // 引用的路径
        const importPath = match[2] as string
        if (!importPath.startsWith('./') && !importPath.startsWith('../')) {
            if (!isCustomPackageName(importPath)) {
                // 不是定制组件，不做处理
                return substring
            } else {
                const defaultInfo = getCategoryAndComponentNameByPackageName(importPath)
                const filePathSplit = filePath.split('/')
                filePathSplit.pop()

                // 引用的相对路径
                let importRelativePath = ''

                // 自己肯定不会引自己的包名，所以一定是其它的
                if (defaultInfo.category.name === category.name) {
                    // 是同一个类别下的
                    importRelativePath = path.join('../'.repeat(filePathSplit.length - 2), defaultInfo.component.name, 'index')
                } else {
                    // 不是同一个类别下的
                    importRelativePath = path.join('../'.repeat(filePathSplit.length - 1), defaultInfo.category.name, defaultInfo.component.name, 'index')
                }

                const importName = _.trim(match[0])
                if (importName === '') {
                    return `import '${importRelativePath}'`
                } else {
                    return `import ${importName} '${importRelativePath}'`
                }
            }
        } else {
            // 相对引用，不做处理
            return substring
        }
    })

    // 保存文件到本地
    fs.writeFileSync(filePath, source)
}

/**
 * 把所有组件的相对引用改为绝对引用
 */
export const toAbsolute = () => {
    components.forEach(category => {
        category.components.forEach(component => {
            const componentRootPath = `${config.componentsPath}/${category.name}/${component.name}`
            // 读取文件内容
            const tsFilePaths = getFilesBySuffix('ts', componentRootPath)
            const tsxFilePaths = getFilesBySuffix('tsx', componentRootPath)

            tsFilePaths.concat(tsxFilePaths).forEach(tsOrTsxFilePath => {
                absoluteImportPath(component, category, tsOrTsxFilePath)
            })
        })
    })
}

/**
 * 把所有组件的绝对引用改为相对引用
 */
export const toRelative = () => {
    components.forEach(category => {
        category.components.forEach(component => {
            const componentRootPath = `${config.componentsPath}/${category.name}/${component.name}`
            // 读取文件内容
            const tsFilePaths = getFilesBySuffix('ts', componentRootPath)
            const tsxFilePaths = getFilesBySuffix('tsx', componentRootPath)

            tsFilePaths.concat(tsxFilePaths).forEach(tsOrTsxFilePath => {
                relativeImportPath(component, category, tsOrTsxFilePath)
            })
        })
    })
}