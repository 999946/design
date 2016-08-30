/**
 * 初始化路由信息
 */

import * as config from '../../config'
import components from '../../components'
import * as fs from 'fs'

export default ()=> {
    let setRouter = ''
    components.forEach(category=> {
        category.components.forEach(component=> {
            const demoPath = `${config.componentsPath}/${category.name}/${component.name}/demo`

            if (fs.existsSync(demoPath)) {
                const demoLists: any = []

                // 遍历当前目录下所有文件
                const fileNames = fs.readdirSync(demoPath).filter(fileName=>fileName !== '')

                let requireList = ''

                fileNames.forEach(fileName => {
                    let fileNameWithoutExt = fileName.replace('.ts', '')
                    fileNameWithoutExt = fileNameWithoutExt.replace('.tsx', '')
                    requireList += `
                        demoLists.push({
                            Class: require('../${config.componentsPath}/${category.name}/${component.name}/demo/${fileNameWithoutExt}').default,
                            code: require('-!text!../${config.componentsPath}/${category.name}/${component.name}/demo/${fileNameWithoutExt}')
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
        })
    })

    const routerInfo = `
        declare var require: any

        const routerMap = new Map<string, any>()
        
        ${setRouter}
    
        export default routerMap
    `
    fs.writeFileSync('./auto-create/components-router.ts', routerInfo)
}