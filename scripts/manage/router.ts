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

export default ()=> {
    let setFullInfo = ''

    components.forEach(category=> {
        category.components.forEach(component=> {

            const demoPath = `${config.componentsPath}/${category.name}/${component.name}/demo`

            if (fs.existsSync(demoPath)) {
                const demoLists: any = []

                // 遍历当前目录下所有文件
                const fileNames = fs.readdirSync(demoPath).filter(fileName=>fileName !== '')

                let requireList = ''

                fileNames.forEach(fileName => {
                    let fileNameWithoutExt = fileName.replace('.tsx', '')
                    fileNameWithoutExt = fileNameWithoutExt.replace('.ts', '')
                    requireList += `
                        demoLists.push({
                            Class: require('../${config.componentsPath}/${category.name}/${component.name}/demo/${fileNameWithoutExt}').default,
                            code: require('-!text!../../${config.componentsPath}/${category.name}/${component.name}/demo/${fileName}')
                        })
                    `
                })

                let documentsRequireList = ''

                // 组件入口文件
                const mainSource = fs.readFileSync(`${config.componentsPath}/${category.name}/${component.name}/index.ts`).toString()

                // 找到入口文件
                const exportString = _.trim(/export\s?\{([a-zA-Z0-9]+)\}/.exec(mainSource)[1])
                let exportStringSplit = exportString.split(',')
                exportStringSplit.forEach(exportName=> {
                    exportName = _.trim(exportName)
                    const pattern = new RegExp(`import\\s+${exportName}\\s+from\\s+\\'([^']+)\\'`)
                    // 引用资源的路径
                    const exportPath = pattern.exec(mainSource)[1]
                    const exportPathNoComponent = _.trimEnd(exportPath, '.component')
                    const exportTypePath = exportPathNoComponent + '.type'
                    // .type 文件完整路径
                    const exportTypeAbsolutePath = path.join(`${config.componentsPath}/${category.name}/${component.name}`, exportTypePath)
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
                            typeCode: require('-!text!../../${exportTypeAbsolutePath}${typeExt}')
                        })
                    `
                })

                if (fileNames.length > 0) {
                    setFullInfo += `routerMap.set('${category.name}/${component.name}', (nextState: any, callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            ${requireList}
                            ${documentsRequireList}
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../${config.componentsPath}/${category.name}/${component.name}/package.json')),
                                documents
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
    fs.writeFileSync('auto-create/component-infos.ts', fullInfo)

    // 由于代码修改了 ts 文件, 需要执行 tsc
    execSync(`tsc`)
}