import * as fs from 'fs'
import {execSync} from 'child_process'
import components from '../../components'

/**
 * 产出定义文件
 */
export const buildDTs = ()=> {
    const comboFilePath = 'components/combo.ts'

    // 先创建聚合文件
    let comboComponentContent = `///<reference path="../typings/index.d.ts" />\n`

    Object.keys(components).forEach(componentCategoryName=> {
        const componentCategory = components[componentCategoryName]
        componentCategory.components.forEach(component=> {
            comboComponentContent += `import './${componentCategoryName}/${component.name}/${component.name}.component'\n`
        })
    })
    fs.writeFileSync(comboFilePath, comboComponentContent)

    // 生成整体 d.ts
    execSync(`tsc -m commonjs -t es6 -d --removeComments --outDir built-components --jsx react ${comboFilePath}`)

    // 再删除聚合文件, 就像它从未出现过一样
    fs.unlink(comboFilePath)
}

buildDTs()