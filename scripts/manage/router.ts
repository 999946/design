/**
 * 初始化路由信息
 */

import * as config from '../../config'
import components from '../../components'
import {execSync} from 'child_process'
import * as _ from 'lodash'
import * as fs from 'fs'
import * as path from 'path'
import consoleLog from './utils/console-log'
import * as trimString from '../../utils/trim-string'

export default ()=> {
    let setFullInfo = ''
    const autoCreate = 'auto-create'

    if (!fs.existsSync(autoCreate)) {
        fs.mkdirSync(autoCreate)
    }

    components.forEach(category=> {
        category.components.forEach(component=> {

            const componentAbsolutePath = `${config.componentsPath}/${category.name}/${component.name}`

            if (fs.existsSync(`${componentAbsolutePath}/demo`)) {
                const demoLists: any = []

                // 遍历当前目录下所有文件
                let fileNames = fs.readdirSync(`${componentAbsolutePath}/demo`).filter(fileName=>fileName !== '')
                fileNames = fileNames.filter(fileName=> {
                    // 只保留 ts tsx 后缀的文件作为 demo
                    return fileName.endsWith('.ts') || fileName.endsWith('.tsx')
                })

                let requireList = ''

                fileNames.forEach(fileName => {
                    let fileNameWithoutExt = fileName.replace('.tsx', '')
                    fileNameWithoutExt = fileNameWithoutExt.replace('.ts', '')
                    requireList += `
                        demoLists.push({
                            Class: require('../${componentAbsolutePath}/demo/${fileNameWithoutExt}').default,
                            code: require('-!text!../../${componentAbsolutePath}/demo/${fileName}')
                        })
                    `
                })

                let documentsRequireList = ''

                // 组件入口文件
                const mainSource = fs.readFileSync(`${componentAbsolutePath}/index.ts`).toString()

                // 导出的那行代码
                const exportString = _.trim(/export\s?\{([^}]+)\}/.exec(mainSource)[1])
                let exportStringSplit = exportString.split(',')
                // 所有导出非定义的模块名
                const exportModuleNameMap: Array<string> = []

                exportStringSplit.forEach(exportName=> {
                    exportName = _.trim(exportName)
                    // 如果文件名不是以 PropsDefine 结束，一定是个模块名
                    if (!exportName.endsWith('PropsDefine')) {
                        exportModuleNameMap.push(exportName)
                    }
                })

                exportStringSplit.forEach(exportName=> {
                    // 找出导出的定义文件
                    exportName = _.trim(exportName)

                    // 如果文件名不是以 PropsDefine 结束，舍弃
                    if (!exportName.endsWith('PropsDefine')) {
                        return
                    }

                    // 找出定义对应的模块名, 只需要把结尾 propsDefine 去掉，名字相同即可，忽略大小写
                    const moduleName = exportModuleNameMap.find(moduleName=>_.toLower(moduleName) === _.toLower(trimString.trimStringEnd(exportName, 'PropsDefine')))

                    if (!moduleName){
                        return
                    }

                    // 找到导出入口，必须保证入口文件只有一个 export {}，可以有 export default, 不受干扰
                    const pattern = new RegExp(`import\\s+.*${exportName}.*\\s+from\\s+\\'([^']+)\\'`)
                    // 引用资源的路径
                    const exportPath = pattern.exec(mainSource)[1]
                    // .type 文件完整路径
                    const exportTypeAbsolutePath = path.join(`${componentAbsolutePath}`, exportPath)
                    let typeExt = '.ts'

                    if (!fs.existsSync(exportTypeAbsolutePath + typeExt)) {
                        // 试试 .tsx
                        typeExt = '.tsx'
                        if (!fs.existsSync(exportTypeAbsolutePath + typeExt)) {
                            consoleLog.error(`${exportTypeAbsolutePath} 文件不存在`)
                        }
                    }

                    documentsRequireList += `
                        documents.push({
                            type: require('../${exportTypeAbsolutePath}'),
                            typeCode: require('-!text!../../${exportTypeAbsolutePath}${typeExt}'),
                            componentName: '${moduleName}'
                        })
                    `
                })

                if (fileNames.length > 0) {
                    let packageJsonRequire = `null`
                    if (fs.existsSync(`${componentAbsolutePath}/package.json`)) {
                        packageJsonRequire = `JSON.parse(require('-!text!../${componentAbsolutePath}/package.json'))`
                    }

                    setFullInfo += `routerMap.set('${category.name}/${component.name}', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            ${requireList}
                            ${documentsRequireList}
                            
                            callback({
                                demos: demoLists,
                                packageJson: ${packageJsonRequire},
                                documents,
                                main: require('../${componentAbsolutePath}/index')
                            })
                        })
                    })\n`
                }
            }
        })
    })

    const fullInfo = `
        declare var require: any

        const routerMap = new Map<string, any>()
        
        ${setFullInfo}
    
        export default routerMap
    `
    fs.writeFileSync(`${autoCreate}/component-infos.ts`, fullInfo)

    // 由于代码修改了 ts 文件, 需要执行 tsc
    execSync(`tsc`)
}