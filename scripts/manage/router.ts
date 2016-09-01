/**
 * 初始化路由信息
 */

import * as config from '../../config'
import components from '../../components'
import {execSync} from 'child_process'
import * as fs from 'fs'

export default ()=> {
    let setRouter = ''
    let setPackageJson = ''

    components.forEach(category=> {
        category.components.forEach(component=> {
            /**
             * router
             */
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

                if (fileNames.length > 0) {
                    setRouter += `routerMap.set('${category.name}/${component.name}', (nextState: any, callback: any) => {
                        const demoLists: any = []
                        
                        require.ensure([], function (require: any) {
                            ${requireList}
                            callback(demoLists)
                        })
                    })\n`
                }
            }

            /**
             * package.json
             */
            const packageJsonPath = `${config.componentsPath}/${category.name}/${component.name}/package.json`
            if (fs.existsSync(packageJsonPath)) {
                setPackageJson += `packageJsonMap.set('${category.name}/${component.name}', (nextState: any, callback: any) => {
                    require.ensure([], function (require: any) {
                        callback(require('-!text!../${config.componentsPath}/${category.name}/${component.name}/package.json'))
                    })
                })\n`
            }
        })
    })

    const routerInfo = `
        declare var require: any

        const routerMap = new Map<string, any>()
        
        ${setRouter}
    
        export default routerMap
    `
    fs.writeFileSync('./auto-create/components-router.ts', routerInfo)

    const packageJsonInfo = `
        declare var require: any

        const packageJsonMap = new Map<string, any>()
        
        ${setPackageJson}
    
        export default packageJsonMap
    `
    fs.writeFileSync('./auto-create/package-json.ts', packageJsonInfo)

    // 由于代码修改了 ts 文件, 需要执行 tsc
    execSync(`tsc`)
}