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
 * 根据组件信息, 寻找这个组件所有依赖
 */
const getDependencies = (componentInfo: Components.ComponentFullInfo)=> {
    // 找到这个目录下所有 ts tsx 文件
    const filesPath: Array<string> = execSync(`find ${config.componentsPath}/${componentInfo.category.name}/${componentInfo.component.name} -name "*.ts" -not -path "${config.componentsPath}/${componentInfo.category.name}/${componentInfo.component.name}/${config.componentBuildPath}/*" -or -name "*.tsx" -not -path "${config.componentsPath}/${componentInfo.category.name}/${componentInfo.component.name}/${config.componentBuildPath}/*"`).toString().split('\n').filter(filePath=>filePath !== '')

    filesPath.forEach(filePath=> {
        const source = fs.readFileSync(filePath).toString()
        const regex = /import\s+[\sa-zA-Z{},]*\s+from/g

        let match: any
        while ((match = regex.exec(source)) != null) {
            console.log(match)
        }
    })
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

    // package.json 对象
    let packageJson: packageJsonManage.PackageJson

    // 如果没有 package.json, 就创建一个
    // if (!fs.existsSync(`${publishPath}/package.json`)) {
    //     consoleLog.warn(`${publishPath} 没有 package.json, 将自动生成`)
    //     packageJson = {
    //         name: `${publishCategory.prefix}-${publishComponent.name}`,
    //         version: '0.0.0',
    //         description: publishComponent.chinese,
    //         main: `${config.componentBuildPath}/${publishComponent.name}.component.js`,
    //         repository: {
    //             type: 'git',
    //             url: publishCategory.isPrivate ? `${config.privateGit}/${publishCategoryName}-${publishComponent.name}.git` : `${config.publicGit}/${publishCategoryName}-${publishComponent.name}.git`
    //         },
    //         keywords: [publishComponent.name],
    //         author: config.author,
    //         license: 'ISC'
    //     }
    // } else {
    //     packageJson = packageJsonManage.getPackageJSON(publishPath)
    // }

    return {
        publishLevel, publishCategory, publishComponent, publishPath, packageJson
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

    // 要发布组件信息的数组
    const publishComponentsInfo: Array<Components.ComponentFullInfo> = []

    publishFullPaths.forEach(publishFullPath=> {
        let componentInfo = getComponentInfoByFullPath(publishFullPath)

        // 填充要发布的组件详细信息
        publishComponentsInfo.push({
            component: componentInfo.publishComponent,
            category: componentInfo.publishCategory
        })

        // 编译 lib 目录
        builder.buildLib(componentInfo.publishComponent, componentInfo.publishCategory)
    })

    // 遍历要发布的组件, 遍历其所有文件, 寻找其所有依赖
    publishComponentsInfo.forEach(componentInfo=> {
        getDependencies(componentInfo)
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