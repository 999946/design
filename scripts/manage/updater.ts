/**
 * 更新或者初始化当前项目
 */

import * as config from '../../config'
import components from '../../components'
import {exec, execSync} from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

export default (commander:any)=> {
    //
    Object.keys(components).forEach(categoryKey=> {
        // 分类信息
        const category = components[categoryKey]

        category.components.forEach(component=> {
            // 组件根目录
            const componentRootPath = `${config.componentsPath}/${categoryKey}/${component.name}`

            // 如果组件不存在, 添加
            if (!fs.existsSync(componentRootPath)) {
                execSync(`git subtree add -P ${componentRootPath} ${config.privateGit}/${categoryKey}-${component.name}.git master`)
            }
        })

    })
}