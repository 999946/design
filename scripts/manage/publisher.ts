/**
 * 发布
 */

import * as config from '../../config'
import components from '../../components'
import {exec, execSync} from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import hasChange from './utils/has-change'
import consoleLog from './utils/console-log'
import * as packageJsonManage from './utils/package-json'
import * as semver from 'semver'
import * as builder from './builder'

/**
 * 创建 package.json
 */
const createPackageJsonIfNotExist = (component: Components.ComponentConfig, category: Components.Category)=> {
    const componentPath = `${config.componentsPath}/${category.name}/${component.name}`
    // 如果当前组件没有 package.json, 就创建一个
    if (!fs.existsSync(`${componentPath}/package.json`)) {
        consoleLog.warn(`${componentPath} 没有 package.json, 将自动生成`)
        const packageJson = {
            name: `${category.prefix}-${component.name}`,
            version: '0.0.0',
            description: component.chinese,
            main: `${config.componentBuildPath}/${component.name}.component.js`,
            repository: {
                type: 'git',
                url: category.isPrivate ? `${config.privateGit}/${category.name}-${component.name}.git` : `${config.publicGit}/${category.name}-${component.name}.git`
            },
            keywords: [component.name],
            author: config.author,
            license: 'ISC'
        }
    }
}

/**
 * 根据组件信息, 寻找这个组件所有依赖
 */
const getInfoWithDependencies = (component: Components.ComponentConfig, category: Components.Category)=> {
    const componentPath = `${config.componentsPath}/${category.name}/${component.name}`

    // 找到这个目录下所有 ts tsx 文件
    const filesPath: Array<string> = execSync(`find ${componentPath} -name "*.ts" -not -path "${componentPath}/${config.componentBuildPath}/*" -or -name "*.tsx" -not -path "${componentPath}/${config.componentBuildPath}/*"`).toString().split('\n').filter(filePath=>filePath !== '')

    const importPaths: Map<string,string> = new Map()

    // 当前模块的依赖文件
    let deps: Components.FullInfoWithDependence = {
        component,
        category,
        packageJson: packageJsonManage.getPackageJSON(componentPath),
        dependence: []
    }

    filesPath.forEach(filePath=> {
        const source = fs.readFileSync(filePath).toString()
        const regex = /import\s+[a-zA-Z{},\s\*]*(from)?\s?\'([^']+)\'/g

        let match: any
        while ((match = regex.exec(source)) != null) {
            // 引用的路径
            const importPath = match[2] as string
            importPaths.set(importPath, filePath)
        }
    })

    for (let importPath of importPaths.keys()) {
        // 获得文件路径
        const filePath = importPaths.get(importPath)
        // 获得文件所在文件夹路径
        const filePathSplit = filePath.split('/')
        filePathSplit.pop()
        const filePathDir = filePathSplit.join('/')

        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            // 是个相对引用
            // 引用模块的完整路径
            const importFullPath = path.join(filePathDir, importPath)
            const importFullPathSplit = importFullPath.split('/')

            if (`${config.componentsPath}/${importFullPathSplit[1]}/${importFullPathSplit[2]}` !== componentPath) {
                // 保证引用一定是 components 下的
                deps.dependence.push({
                    type: 'component',
                    name: importFullPathSplit[2],
                    category: importFullPathSplit[1]
                })
            }
        } else {
            // 绝对引用, 暂时认为一定引用了 node_modules 库
            deps.dependence.push({
                type: 'npm',
                name: importPath
            })
        }
    }

    return deps
}

/**
 * 根据传进来的参数, 获取组件信息
 */
const getComponentInfoByFullPath = (publishFullPath: string)=> {
    if (publishFullPath.indexOf('#') === -1) {
        consoleLog.error('发布级别必填, eg: [your path]#major 可选项: major | minor | patch')
    }
    const publishFullPathSplit = publishFullPath.split('#')
    // 发布目录
    const publishSecondPath = publishFullPathSplit[0]
    // 发布级别
    const publishLevel = publishFullPathSplit[1]

    if (publishLevel !== 'major' && publishLevel !== 'minor' && publishLevel !== 'patch') {
        consoleLog.error('发布级别可选项: major | minor | patch')
    }

    const publishPathSplit = publishSecondPath.split('/')
    const publishCategoryName = publishPathSplit[0]
    const publishComponentName = publishPathSplit[1]

    // 发布分类信息
    const publishCategory = components.find(category=>category.name === publishCategoryName)
    if (!publishCategory) {
        consoleLog.error(`${publishCategoryName} 分类不存在`)
    }

    // 发布组件信息
    const publishComponent = publishCategory.components.find(item=>item.name === publishComponentName)
    if (!publishComponent) {
        consoleLog.error(`${publishComponentName} 组件不存在`)
    }
    // 组件路径
    const publishPath = `${config.componentsPath}/${publishSecondPath}`
    if (!fs.existsSync(publishPath)) {
        consoleLog.error(`${publishPath} 组件目录不存在`)
    }

    return {
        publishLevel, publishCategory, publishComponent, publishPath
    }
}

export default (publishFullPaths: Array<string>)=> {
    if (hasChange('./')) {
        return consoleLog.error('不能有未提交修改')
    }

    if (publishFullPaths.length === 0) {
        return consoleLog.error('发布目录不能为空')
    }

    // 生成 ts 编译和定义文件
    builder.buildDTs()

    // 所有组件以及依赖信息
    let allComponentsInfoWithDep: Array<Components.FullInfoWithDependence> = []

    // 获取所有组件以及依赖信息
    components.forEach(category=> {
        category.components.forEach(component=> {
            // 如果没有 package.json 就创建一个
            createPackageJsonIfNotExist(component, category)

            // 把这个组件加入依赖信息
            allComponentsInfoWithDep.push(getInfoWithDependencies(component, category))
        })
    })

    // 遍历要发布的组件
    publishFullPaths.forEach(publishFullPath=> {
        let componentInfo = getComponentInfoByFullPath(publishFullPath)

        // 编译 lib 目录
        builder.buildLib(componentInfo.publishComponent, componentInfo.publishCategory)

        // 寻找依赖这个组件的组件
        allComponentsInfoWithDep.forEach(componentInfoWithDep=> {
            console.log(JSON.stringify(componentInfoWithDep))
        })
    })

    // publishFullPaths.forEach(publishFullPath=> {
    //     let {publishLevel, publishCategory, publishCategoryName, publishComponent, publishPath, packageJson} = getComponentInfoByFullPath(publishFullPath)
    //
    //     // 根据用户输入, 发个新版本
    //     packageJson.version = semver.inc(packageJson.version, publishLevel)
    //
    //     // 写 package.json
    //     packageJsonManage.writePackageJSON(publishPath, packageJson)
    // })

    // TODO 第一次遍历要发布的文件, 编译这些文件
    // TODO 先把所有要编译的文件存为数组, 获取其完整依赖树, 再根据依赖树更新组件状态, 返回所有更新版本的组件, 再提交

    // 根项目 commit
    // execSync(`git add -A`)
    // execSync(`git commit -m "更新组件版本 ${publishFullPaths.toString()}"`)
    //
    // // 再循环一遍, 这次从根目录已经提交了
    // publishFullPaths.forEach(publishFullPath=> {
    //     let {publishLevel, publishCategory, publishCategoryName, publishComponent, publishPath, packageJson} = getComponentInfoByFullPath(publishFullPath)
    //     if (publishCategory.isPrivate) { // 私有发布
    //         // 打 tag
    //         execSync(`cd ${publishPath}; git tag v${packageJson.version}`)
    //
    //         // push 分支
    //         execSync(`git subtree push -P ${publishPath} ${config.privateGit}/${publishCategoryName}-${publishComponent.name}.git v${packageJson.version}`)
    //         // push master
    //         execSync(`git subtree push -P ${publishPath} ${config.privateGit}/${publishCategoryName}-${publishComponent.name}.git master`)
    //     } else {  // 公有发布
    //
    //     }
    // })
    //
    // // 根目录提交
    // execSync(`git push`)
}