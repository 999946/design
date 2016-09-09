import * as fs from 'fs'
import * as path from 'path'
import {execSync} from 'child_process'
import components from '../../components'
import * as babel from 'babel-core'
import * as sass from 'node-sass'
import * as autoprefixer from 'autoprefixer'
import * as postcss  from 'postcss'
import htmlPathLoader from './utils/html-path-loader'
import cssPathLoader from './utils/css-path-loader'
import * as config from '../../config'

/**
 * babel 编译
 */
const parseBabel = (filePath: string, component: Components.ComponentConfig, category: Components.Category) => {
    const componentPath = `${config.componentsPath}/${category.name}/${component.name}`

    let jsFileContent = fs.readFileSync(filePath).toString()

    // 把引用的其它组件代码转换成绝对地址
    const regex = /require\s?\(\'([^']*)\'\)/g
    jsFileContent = jsFileContent.replace(regex, (...matched: Array<string>)=> {
        const importPath = matched[1]
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            // 获得文件所在文件夹路径
            const filePathSplit = filePath.split('/')
            filePathSplit.pop()
            const filePathDir = filePathSplit.join('/')
            // 加了一层 lib 所以多返回上一级目录
            const importFullPath = path.join(filePathDir, '../', importPath)

            const importFullPathSplit = importFullPath.split('/')

            if (`${config.componentsPath}/${importFullPathSplit[1]}/${importFullPathSplit[2]}` !== componentPath) {
                // 保证引用的模块不是自己
                const depCategory = components.find(category=>category.name === importFullPathSplit[1])
                const depComponent = depCategory.components.find(component=>component.name === importFullPathSplit[2])

                if (importFullPathSplit.length === 4 && importFullPathSplit[3] === 'index') {
                    // 这种引入了模块根路径的方式，和直接引用无异
                    importFullPathSplit.pop()
                }

                if (importFullPathSplit.length === 3) {
                    // 只引用到了模块本身
                    return `require('${depCategory.prefix}-${depComponent.name}')`
                } else {
                    importFullPathSplit.shift()
                    importFullPathSplit.shift()
                    importFullPathSplit.shift()
                    // 补上入口路径
                    const requirePath = path.join(`${depCategory.prefix}-${depComponent.name}/${config.componentBuildPath}/${importFullPathSplit.join('/')}`)
                    return `require('${requirePath}')`
                }
            }
        }
        return matched[0]
    })

    // scss 改为 css 后缀
    jsFileContent = jsFileContent.replace(/\.scss/g, '.css')

    // babel 编译
    const babelResult = babel.transform(jsFileContent, {
        extends: path.join(__dirname, '../../../.babelrc')
    })

    let resultCode = babelResult.code

    fs.writeFileSync(filePath, resultCode)
}

/**
 * scss 编译
 */
const parseSass = (filePath: string, component: Components.ComponentConfig, category: Components.Category) => {
    let cssPath = filePath.replace('.scss', '.css')

    // scss 编译
    let result = sass.renderSync({
        file: filePath
    }).css.toString()

    // autoprefixer 插件处理
    const postResult = postcss([autoprefixer]).process(result).css

    // 移除 scss 后缀的文件
    execSync(`rm ${filePath}`)

    fs.writeFileSync(cssPath, postResult)
}

/**
 * 编译 d.ts
 */
const parseDts = (filePath: string, component: Components.ComponentConfig, category: Components.Category) => {
    let source = fs.readFileSync(filePath).toString()
    const regex = /import\s+([a-zA-Z{},\s\*]*)(from)?\s?\'([^']+)\'/g

    source = source.replace(regex, (...match: Array<string>)=> {
        // 引用的路径
        const importPath = match[3] as string
        // 获得文件所在文件夹路径
        const filePathSplit = filePath.split('/')
        filePathSplit.pop()
        const filePathDir = filePathSplit.join('/')

        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            const importFullPath = path.join(filePathDir, '../', importPath)
            const importFullPathSplit = importFullPath.split('/')

            if (`${importFullPathSplit[1]}/${importFullPathSplit[2]}` !== `${category.name}/${component.name}`) {
                // 保证引用的模块不是自己
                return `import ${match[1]} ${match[2]} '${category.prefix}-${component.name}'`
            }
        }

        return match[0]
    })

    console.log(source)
}

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
            comboComponentContent += `import './${category.name}/${component.name}/index'\n`
        })
    })

    fs.writeFileSync(comboFilePath, comboComponentContent)

    // 生成整体 d.ts
    execSync(`tsc -m commonjs -t es6 -d --removeComments --outDir built-components --jsx react --experimentalDecorators ${comboFilePath}`)

    // 再删除聚合文件, 就像它从未出现过一样
    fs.unlink(comboFilePath)
}

/**
 * 编译 lib 文件夹
 */
export const buildLib = (component: Components.ComponentConfig, category: Components.Category)=> {
    // lib 路径
    const sourcePath = `components/${category.name}/${component.name}`
    const libPath = `components/${category.name}/${component.name}/lib`

    // 先删除 lib 目录
    if (fs.existsSync(libPath)) {
        execSync(`rm -rf ${libPath}`)
    }

    // 再创建 lib 目录
    fs.mkdirSync(libPath)

    // 将编译后的文件移到当前 lib 目录下, 这里只有 js 文件
    execSync(`mv built-components/${category.name}/${component.name}/* ${libPath}`)

    // 拷贝除了 ts tsx lib/ demo/ test/ 到 lib 目录下
    // 一定要放上一步 mv 后面, 不然 lib 目录非空了再 mv 会报错
    execSync(`rsync -av --progress ${sourcePath}/* ${libPath} --exclude lib --exclude demo --exclude test --exclude package.json --exclude readme.md --exclude "*.ts" --exclude "*.tsx"`)

    // 找出 lib 目录下的 js 文件
    let jsFilePaths = getFilesBySuffix('js', libPath)

    jsFilePaths.forEach(filePath=> {
        htmlPathLoader(filePath, component, category)
        parseBabel(filePath, component, category)
    })

    // 找出 lib 目录下 scss 文件
    let scssFilePaths = getFilesBySuffix('scss', libPath)
    scssFilePaths.forEach(filePath=> {
        // 豁免 .mixin.scss
        if (filePath.endsWith('.mixin.scss')) {
            return
        }
        cssPathLoader(filePath, component, category)
        parseSass(filePath, component, category)
    })

    // 找出 lib 目录下 d.ts 文件
    let dtsFilePaths = getFilesBySuffix('d.ts', libPath)
    dtsFilePaths.forEach(filePath=> {
        parseDts(filePath, component, category)
    })
}