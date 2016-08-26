/**
 * 提交当前项目
 */

import * as config from '../../config'
import components from '../../components'
import {exec, execSync} from 'child_process'
import hasChange from './utils/has-change'
import * as path from 'path'
import * as fs from 'fs'
import consoleLog from './utils/console-log'

export default (message: string)=> {
    if (!hasChange('./')) {
        consoleLog.error('没有改动')
    }

    execSync(`git add -A`)
    execSync(`git commit -m "${message}"`)

    Object.keys(components).forEach(categoryKey=> {
        // 分类信息
        const category = components[categoryKey]

        category.components.forEach(component=> {
            // 组件根目录
            const componentRootPath = `${config.componentsPath}/${categoryKey}/${component.name}`

            // 如果组件存在, 并且有改动, 提交
            if (fs.existsSync(componentRootPath)) {
                execSync(`git subtree push -P ${componentRootPath} ${config.privateGit}/${categoryKey}-${component.name}.git master`)
            }
        })
    })

    execSync(`git push origin master`)
}