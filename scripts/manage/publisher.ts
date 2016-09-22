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
import showPublishTable from './utils/publish-table'
import * as formatJson from 'format-json'
import * as componentHelper from './utils/component-helper'
const prompt = require('prompt')

// 所有组件以及依赖信息
const allComponentsInfoWithDep: Array<Components.FullInfoWithDependence> = []

// 所有直接依赖这次发布组件的组件 （含发布组件）
const allPublishComponents: Array<Components.PublishInfo> = []

// 按照对这次发布组件的依赖从低到高排列, 需要先模拟发布
// 模拟发布的组件数组
const simulations: Array<Components.PublishInfo> = []

// 当前根项目 package.json
const rootPackageJson = packageJsonManage.getPackageJSON('./')

/**
 * 初始化所有组件信息
 */
const getAllComponentsInfoWithDep = ()=> {
    // 获取所有组件以及依赖信息
    components.forEach(category=> {
        category.components.forEach(component=> {
            // 如果没有 package.json 就创建一个
            createPackageJsonIfNotExist(component, category)

            // 把这个组件加入依赖信息
            allComponentsInfoWithDep.push(getInfoWithDependencies(component, category))
        })
    })
}

/**
 * 将一个组件添加到这次依赖的发布组件
 */
const addComponentToPublishComponents = (component: Components.ComponentConfig, category: Components.Category, publishLevel: Components.PublishLevel, isUserOperate: boolean = false)=> {
    // 从全部组件信息中找到这个组件的全信息
    const componentInfoWithDep = allComponentsInfoWithDep.find(componentInfoWithDep=>componentInfoWithDep.component.name === component.name && componentInfoWithDep.category.name === category.name)

    // 从发布组件库中找到这个组件的信息
    let publishComponentIndex = allPublishComponents.findIndex(publishComponent=>publishComponent.componentInfoWithDep.component.name === component.name && publishComponent.componentInfoWithDep.category.name === category.name)

    // 如果这个组件已经在依赖中, 如果这次发布的版本号比之前的高, 更新
    if (publishComponentIndex > -1) {
        switch (comparePublishLevel(publishLevel, allPublishComponents[publishComponentIndex].publishLevel)) {
            case 0:
                // 相同
                break
            case -1:
                // 这次的等级变小了, 不用管
                break
            case 1:
                // 这次的等级变大了, 直接覆盖
                allPublishComponents[publishComponentIndex].publishLevel = publishLevel
                break
        }

        if (isUserOperate === true) {
            allPublishComponents[publishComponentIndex].isUserOperate = true
            allPublishComponents[publishComponentIndex].userPublishLevel = publishLevel
        }
    } else {
        // 不存在直接添加
        let userPublishLevel: Components.PublishLevel = 'empty'
        if (isUserOperate) {
            userPublishLevel = publishLevel
        }

        allPublishComponents.push({
            userPublishLevel,
            publishLevel,
            componentInfoWithDep,
            isUserOperate,
            preVersion: componentInfoWithDep.packageJson.version
        })
    }
}

/**
 * 对比发布级别的大小
 */
const comparePublishLevel = (targetLevel: string, beforeLevel: string)=> {
    // 相等的情况
    if (targetLevel === beforeLevel) {
        return 0
    }

    switch (targetLevel) {
        case 'major':
            return 1
        case 'minor':
            if (beforeLevel === 'patch') {
                return 1
            } else {
                return -1
            }
        case 'patch':
            return -1
        default:
            return -1
    }
}

/**
 * 遍历要发布的组件, 将没有依赖的（或者依赖了组件,但是在模拟发布队列中）组件添加到模拟发布队列中
 */
const pushNoDepPublishComponents = ()=> {
    // 为了防止对模拟发布列表的修改影响本次判断, 做一份拷贝
    const simulationsCopy = simulations.concat()

    // 遍历要发布的组件
    allPublishComponents.forEach(publishComponent=> {
        // 过滤已经在发布队列中的组件
        let isPublishInSimulation = false
        for (let simulation of simulationsCopy) {
            if (simulation === publishComponent) {
                isPublishInSimulation = true
                break
            }
        }
        if (isPublishInSimulation) {
            return
        }

        // 是否依赖了本次发布的组件
        let isRelyToPublishComponent = false

        publishComponent.componentInfoWithDep.dependence.forEach(dependence=> {
            if (dependence.type === 'npm') {
                // 不看 npm 依赖
                return
            }

            // 遍历要发布的组件
            for (let elPublishComponent of allPublishComponents) {
                // 是否在模拟发布列表中
                let isInSimulation = false
                for (let simulation of simulationsCopy) {
                    if (simulation === elPublishComponent) {
                        isInSimulation = true
                        break
                    }
                }
                if (isInSimulation) {
                    // 如果这个发布的组件已经在模拟发布组件中, 跳过
                    continue
                }

                if (elPublishComponent.componentInfoWithDep.component.name === dependence.name && elPublishComponent.componentInfoWithDep.category.name === dependence.category) {
                    // 这个依赖在这次发布组件中
                    isRelyToPublishComponent = true
                    break
                }
            }
        })

        if (!isRelyToPublishComponent) {
            // 这个组件没有依赖本次要发布的组件, 把它添加到发布列表中
            simulations.push(publishComponent)
        }
    })
}

/**
 * 创建 package.json
 */
const createPackageJsonIfNotExist = (component: Components.ComponentConfig, category: Components.Category)=> {
    const componentPath = `${config.componentsPath}/${category.name}/${component.name}`
    // 如果当前组件没有 package.json, 就创建一个
    if (!fs.existsSync(`${componentPath}/package.json`)) {
        consoleLog.warn(`${componentPath} 没有 package.json, 将自动生成`)

        const packageJson = {
            name: componentHelper.getPackageName(category.name, component.name),
            version: '0.0.0',
            description: component.chinese,
            main: `${config.componentBuildPath}/index.js`,
            typings: `${config.componentBuildPath}/index.d.ts`,
            repository: {
                type: 'git',
                url: componentHelper.getGit(category.name, component.name)
            },
            keywords: [component.name],
            author: config.author,
            license: 'ISC',
            dependencies: {},
            peerDependencies: {}
        } as Components.PackageJson
        packageJsonManage.writePackageJSON(componentPath, packageJson)
    }
}

/**
 * 根据组件信息, 寻找这个组件所有依赖
 */
const getInfoWithDependencies = (component: Components.ComponentConfig, category: Components.Category)=> {
    const componentPath = `${config.componentsPath}/${category.name}/${component.name}`

    // 找到这个目录下所有 ts tsx 文件, 排除 gif demo 用来做依赖解析
    const filesPath: Array<string> = execSync(`find ${componentPath} -name "*.ts" -not -path "${componentPath}/${config.componentBuildPath}/*" -or -name "*.tsx" -not -path "${componentPath}/${config.componentBuildPath}/*" -not -path "${componentPath}/demo/*" -not -path "${componentPath}/test/*"`).toString().split('\n').filter(filePath=>filePath !== '')

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
        const regex = /import\s+[a-zA-Z{},\s\*_\$]*(from)?\s?\'([^']+)\'/g

        let match: Array<string>
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
                // 保证引用的模块不是自己
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
    const publishFullPathSplit = publishFullPath.split('#')
    // 发布目录
    const publishSecondPath = publishFullPathSplit[0]
    // 发布级别
    const publishLevel = publishFullPathSplit[1] as Components.PublishLevel

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

/**
 * 读取发布列表逐一发布
 */
const writeNowPublishToPackageJson = ()=> {
    simulations.forEach(publishInfo=> {
        // 更新自己的依赖
        let dependences: {
            [name: string]: string
        } = {}

        let peerDependences: {
            [name: string]: string
        } = {}

        publishInfo.componentInfoWithDep.dependence.forEach(dependence=> {
            if (dependence.type === 'npm') {
                // 对几个重要模块特殊处理
                const customPackageInfo = config.customNpmPackage.find(customPackage=>customPackage.name === dependence.name)
                if (customPackageInfo) {
                    // 如果在配置文件中, 用配置文件中的版本号
                    switch (customPackageInfo.type) {
                        case 'peerDependences':
                            peerDependences[customPackageInfo.name] = customPackageInfo.version
                            return
                        case 'dependences':
                            dependences[customPackageInfo.name] = customPackageInfo.version
                            return
                    }
                } else {
                    // 否则直接在根目录的 package.json 中寻找版本号
                    if (!rootPackageJson.dependencies[dependence.name]) {
                        consoleLog.error(`${dependence.name} 的依赖没有在根项目中安装`)
                    }
                    // npm 的依赖用根目录的版本号
                    dependences[dependence.name] = rootPackageJson.dependencies[dependence.name]
                }
            } else {
                // 组件的依赖, 用其发布后的版本号
                // 优先在模拟发布队列中寻找, 找不到再从整个组件中找
                const dependenceFullInfo = simulations.find(simulation=>simulation.componentInfoWithDep.category.name === dependence.category && simulation.componentInfoWithDep.component.name === dependence.name)
                if (dependenceFullInfo) {
                    // 在发布队列找到了, 用其发布后的版本号
                    const moduleName = componentHelper.getPackageName(dependenceFullInfo.componentInfoWithDep.category.name, dependenceFullInfo.componentInfoWithDep.component.name)
                    const version = semver.inc(dependenceFullInfo.preVersion, dependenceFullInfo.publishLevel)
                    if (dependenceFullInfo.componentInfoWithDep.category.isPrivate) {
                        // 如果这个组件是个私有组件，修正依赖路径，写死版本号
                        dependences[moduleName] = `${componentHelper.getGit(dependenceFullInfo.componentInfoWithDep.category.name, dependenceFullInfo.componentInfoWithDep.component.name, true)}/repository/archive.tar.gz?ref=v${version}`
                    } else {
                        dependences[moduleName] = `^${version}`
                    }
                } else {
                    // 发布队列没找到, 从完整组件中寻找
                    const dependenceInfo = allComponentsInfoWithDep.find(componentInfo=>componentInfo.category.name === dependence.category && componentInfo.component.name === dependence.name)
                    const moduleName = componentHelper.getPackageName(dependenceInfo.category.name, dependenceInfo.component.name)
                    const version = dependenceInfo.packageJson.version

                    if (dependenceInfo.category.isPrivate) {
                        // 如果这个组件是个私有组件，修正依赖路径，写死版本号
                        dependences[moduleName] = `${componentHelper.getGit(dependenceInfo.category.name, dependenceInfo.component.name, true)}/repository/archive.tar.gz?ref=v${version}`
                    } else {
                        dependences[moduleName] = `^${version}`
                    }
                }
            }
        })

        // 写入 package.json 中
        publishInfo.componentInfoWithDep.packageJson.version = semver.inc(publishInfo.componentInfoWithDep.packageJson.version, publishInfo.publishLevel)
        publishInfo.componentInfoWithDep.packageJson.dependencies = dependences
        publishInfo.componentInfoWithDep.packageJson.peerDependencies = peerDependences
        packageJsonManage.writePackageJSON(`${config.componentsPath}/${publishInfo.componentInfoWithDep.category.name}/${publishInfo.componentInfoWithDep.component.name}`, publishInfo.componentInfoWithDep.packageJson)
    })
}

export default (publishFullPaths: Array<string>)=> {
    if (hasChange('./')) {
        return consoleLog.error('不能有未提交修改')
    }

    if (publishFullPaths.length === 0) {
        return consoleLog.error('发布目录不能为空')
    }

    getAllComponentsInfoWithDep()

    // 整体 tsc
    // execSync(`tsc`)

    // 实际发布路径
    const realPublishFullPaths: Array<string> = []

    // 如果提交路径只有 components 或 components/[category] 就发布所有组件 或者 整个分类
    publishFullPaths.forEach(publishFullPath=> {
        if (publishFullPath.indexOf('#') === -1) {
            consoleLog.error('发布级别必填, eg: [your path]#major 可选项: major | minor | patch')
        }

        if (publishFullPath.endsWith('/')) {
            consoleLog.error('路径不能以 / 结尾')
        }

        // 如果 publishFullPath 是有三级目录，去掉第一级
        const publishFullPathSplitWithPath = publishFullPath.split('/')
        if (publishFullPathSplitWithPath.length >= 3) {
            publishFullPathSplitWithPath.shift()
            publishFullPath = publishFullPathSplitWithPath.join('/')
        }

        const publishFullPathSplit = publishFullPath.split('#')

        // 纯路径部分 split
        const publishFullComponentPathSplit = publishFullPathSplit[0].split('/')

        if (publishFullComponentPathSplit.length === 1 && publishFullComponentPathSplit[0] === 'components') {
            // 发布全部组件
            components.forEach(category=> {
                category.components.forEach(component=> {
                    const publishPath = `${category.name}/${component.name}#${publishFullPathSplit[1]}`
                    if (realPublishFullPaths.findIndex(real=>real === publishPath) === -1) {
                        realPublishFullPaths.push(publishPath)
                    }
                })
            })
        } else if (publishFullComponentPathSplit.length === 1 && publishFullComponentPathSplit[0] !== 'components') {
            // 发布整个分类
            components.forEach(category=> {
                if (category.name === publishFullComponentPathSplit[0]) {
                    category.components.forEach(component=> {
                        const publishPath = `${category.name}/${component.name}#${publishFullPathSplit[1]}`
                        if (realPublishFullPaths.findIndex(real=>real === publishPath) === -1) {
                            realPublishFullPaths.push(publishPath)
                        }
                    })
                }
            })
        } else if (publishFullComponentPathSplit.length === 2 && publishFullComponentPathSplit[0] === 'components') {
            // 发布整个分类
            components.forEach(category=> {
                if (category.name === publishFullComponentPathSplit[1]) {
                    category.components.forEach(component=> {
                        const publishPath = `${category.name}/${component.name}#${publishFullPathSplit[1]}`
                        if (realPublishFullPaths.findIndex(real=>real === publishPath) === -1) {
                            realPublishFullPaths.push(publishPath)
                        }
                    })
                }
            })
        } else {
            if (realPublishFullPaths.findIndex(real=>real === publishFullPath) === -1) {
                realPublishFullPaths.push(publishFullPath)
            }
        }
    })

    // 统计出所有要发布的组件（可能因为依赖而连带发布的）
    realPublishFullPaths.forEach(publishFullPath=> {
        let componentInfo = getComponentInfoByFullPath(publishFullPath)

        // 编译 lib 目录
        builder.buildLib(componentInfo.publishComponent, componentInfo.publishCategory)

        // 将其添加到待发布组件中
        addComponentToPublishComponents(componentInfo.publishComponent, componentInfo.publishCategory, componentInfo.publishLevel, true)

        if (componentInfo.publishLevel === 'major') {
            // 如果发布的是主版本, 所有对其直接依赖的组件都要更新 patch
            // 寻找依赖这个组件的组件
            allComponentsInfoWithDep.forEach(componentInfoWithDep=> {
                componentInfoWithDep.dependence.forEach(dep=> {
                    if (dep.type === 'component' && dep.category === componentInfo.publishCategory.name && dep.name === componentInfo.publishComponent.name) {
                        // 这个组件依赖了当前要发布的组件, 而且这个发布的还是主版本号, 因此给它发布一个 minor 版本
                        // 不需要更新其它依赖, package.json 更新依赖只有要发布的组件才会享受, 其它的又不发布, 不需要更新依赖, 保持版本号更新发个新版本就行了, 他自己的依赖会在发布他的时候修正
                        addComponentToPublishComponents(componentInfoWithDep.component, componentInfoWithDep.category, 'minor')
                    }
                })
            })
        }
    })

    // 添加未依赖的组件到模拟发布队列, 直到队列长度与发布组件长度相等
    while (simulations.length !== allPublishComponents.length) {
        pushNoDepPublishComponents()
    }

    // 显示发布关系队列
    showPublishTable(simulations)

    // 把这次发布的信息写入 publish.json 中
    fs.writeFileSync('publish.json', formatJson.plain(simulations))

    // 询问用户是否继续
    prompt.start()
    prompt.get([{
        name: 'publish',
        description: '以上是最终发布信息, 确认发布吗? (true or false)',
        message: '选择必须是 true or false 中的任意一个',
        type: 'boolean',
        required: true
    }], (err: Error, result: any) => {
        if (err || !result) {
            return
        }

        if (result.publish) {
            // 根据发布信息, 写入 package.json
            writeNowPublishToPackageJson()

            // 这时候已经有组件的 package.json 修改了, 根目录提交
            execSync(`git add -A`)
            execSync(`git commit -m "发布组件"`)

            // 再循环一遍, 这次从根目录已经提交了
            simulations.forEach(publishInfo=> {
                const publishPath = `${config.componentsPath}/${publishInfo.componentInfoWithDep.category.name}/${publishInfo.componentInfoWithDep.component.name}`

                const gitSource = componentHelper.getGit(publishInfo.componentInfoWithDep.category.name, publishInfo.componentInfoWithDep.component.name)

                if (publishInfo.componentInfoWithDep.category.isPrivate) { // 私有发布
                    // 打 tag
                    execSync(`cd ${publishPath}; git tag v${publishInfo.componentInfoWithDep.packageJson.version}`)

                    // push 分支
                    execSync(`git subtree push -P ${publishPath} ${gitSource} v${publishInfo.componentInfoWithDep.packageJson.version}`)

                    // 因为这个 tag 也打到了根目录, 所以在根目录删除这个 tag
                    execSync(`git tag -d v${publishInfo.componentInfoWithDep.packageJson.version}`)
                } else {
                    execSync(`cd ${publishPath}; npm publish`)
                }

                // push 到 master
                execSync(`git subtree push -P ${publishPath} ${gitSource} master`)
            })

            // 根目录提交
            execSync(`git push`)
        }
    })
}