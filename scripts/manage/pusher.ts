/**
 * 提交当前项目
 */

import * as config from '../../config'
import components from '../../components'
import { exec, execSync } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import * as _ from 'lodash'
import consoleLog from './utils/console-log'
import * as componentHelper from './utils/component-helper'
import * as transform from './transform'

export default (message: string) => {
    // 本地要提交的组件
    const pushLists: Array<{
        categoryName: string
        componentName: string
    }> = []

    // 转换为绝对路径
    transform.toAbsolute()

    const gitStatus = execSync(`git status`).toString()
    if (gitStatus.indexOf('nothing to commit, working directory clean') > -1) {
        transform.toRelative()
        consoleLog.error('没有改动')
    } else {
        // 删除组件所有产出
        execSync('find ./components -name "lib" | xargs rm -rf')

        const diffNameListString = execSync(`git diff --name-only`).toString()
        const diffNameList = diffNameListString.split('\n')
        diffNameList.forEach(filePath => {
            filePath = _.trim(filePath)
            if (filePath === '') {
                return
            }

            const filePathSplit = filePath.split('/')
            if (filePathSplit.length >= 3 && filePathSplit[0] === config.componentsPath) {
                // 如果不在提交列表中， push 进去
                if (pushLists.findIndex(item => item.categoryName === filePathSplit[1] && item.componentName === filePathSplit[2]) === -1) {
                    pushLists.push({
                        categoryName: filePathSplit[1],
                        componentName: filePathSplit[2]
                    })
                }
            }
        })
    }

    try{
        execSync(`git add -A`)
        execSync(`git commit -m "${message}"`)
    }catch(error){}

    components.forEach(category => {
        category.components.forEach(component => {
            // 在提交列表中才 push
            if (pushLists.findIndex(item => item.categoryName === category.name && item.componentName === component.name) > -1) {
                // 组件根目录
                const componentRootPath = `${config.componentsPath}/${category.name}/${component.name}`

                const gitSource = componentHelper.getGit(category.name, component.name)

                // 如果组件存在, 提交
                if (fs.existsSync(componentRootPath)) {
                    exec(`git subtree push -P ${componentRootPath} ${gitSource} master`)
                }
            }
        })
    })

    execSync(`git push origin master`)
    transform.toRelative()
}