import * as fs from 'fs'
import {execSync} from 'child_process'
import components from '../../components'
import htmlPathLoader from './utils/html-path-loader'

/**
 * 根据后缀找文件
 */
const getFilesBySuffix = (suffix: string, modulePath: string): Array<string>=> {
    let files = execSync(`find ${modulePath} -name "*.${suffix}"`).toString().split('\n')
    files = files.filter((item)=> {
        return item !== ''
    })
    return files
}

/**
 * 产出定义文件
 */
export const buildDTs = ()=> {
    const comboFilePath = 'components/combo.ts'

    // 先创建聚合文件
    let comboComponentContent = `///<reference path="../typings/index.d.ts" />\n`

    components.forEach(category=> {
        category.components.forEach(component=> {
            comboComponentContent += `import './${category.name}/${component.name}/${component.name}.component'\n`
        })
    })

    fs.writeFileSync(comboFilePath, comboComponentContent)

    // 生成整体 d.ts
    execSync(`tsc -m commonjs -t es6 -d --removeComments --outDir built-components --jsx react ${comboFilePath}`)

    // 再删除聚合文件, 就像它从未出现过一样
    fs.unlink(comboFilePath)
}

/**
 * 编译 lib 文件夹
 */
export const buildLib = (component: Components.ComponentConfig, category: Components.Category)=> {
    // 将编译后的文件移到当前 lib 目录下
    execSync(`mv built-components/${category.name}/${component.name} components/${category.name}/${component.name}/lib`)

    const libPath = `components/${category.name}/${component.name}/lib`

    let jsFilePaths = getFilesBySuffix('js', libPath)
    jsFilePaths.forEach(filePath=> {
        htmlPathLoader(filePath)
    })
}