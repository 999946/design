/**
 * 更新或者初始化当前项目
 * 更新的时候, 要保证当前目录没有修改
 */

import * as config from '../../config'
import components from '../../components'
import {exec, execSync} from 'child_process'
import * as path from 'path'
import * as _ from 'lodash'
import * as fs from 'fs'
import hasChange from './utils/has-change'
import consoleLog from './utils/console-log'
import * as componentHelper from './utils/component-helper'

export default ()=> {
    // 判断是否有修改, 如果有修改, 终止更新
    if (hasChange('./')) {
        consoleLog.error('有未提交修改, 停止更新')
        return
    }

    // 先拉主项目，再拉子项目
    execSync(`git pull origin master`)

    components.forEach(category=> {
        category.components.forEach(component=> {
            // 组件根目录
            const componentRootPath = `${config.componentsPath}/${category.name}/${component.name}`

            const gitSource = componentHelper.getGit(category.name, component.name)

            if (!fs.existsSync(componentRootPath)) {
                // 如果组件不存在, 添加
                execSync(`git subtree add -P ${componentRootPath} ${gitSource} master`)
            } else {
                // 组件存在, 更新
                try {
                    execSync(`git subtree pull -P ${componentRootPath} ${gitSource} master`)
                } catch (error) {
                    if (category.isPrivate) {
                        consoleLog.warn('subtree 更新失败，可能因为没有私有项目权限')
                    }
                }
            }

            // 更新完后如果发现没东西, 或者目录下除了 readme.md 以外都是空的, 填上默认文件
            const filesPath = fs.readdirSync(componentRootPath)
            if (filesPath.length === 0 || filesPath.length === 1 && filesPath[0] === `readme.md`) {
                // 驼峰大写的主组件名, 而且第一个字母也要大写
                let camelComponentName = _.camelCase(component.name)
                camelComponentName = camelComponentName.charAt(0).toUpperCase() + camelComponentName.slice(1)

                fs.writeFileSync(`${componentRootPath}/index.ts`, `
                    import ${camelComponentName} from './${component.name}/${component.name}.component'
                    import {PropsDefine as ${camelComponentName}PropsDefine} from './${component.name}/${component.name}.type'

                    export {${camelComponentName}, ${camelComponentName}PropsDefine}
                    export default ${camelComponentName}
                `)
                fs.mkdirSync(`${componentRootPath}/demo`)
                fs.mkdirSync(`${componentRootPath}/${component.name}`)

                fs.writeFileSync(`${componentRootPath}/${component.name}/${component.name}.component.tsx`, `
                    import * as React from 'react'
                    import * as typings from './${component.name}.type'
                    
                    export default class ${camelComponentName} extends React.Component <typings.PropsDefine, typings.StateDefine> {
                        static defaultProps: typings.PropsDefine = new typings.Props()
                        public state: typings.StateDefine = new typings.State()
                    
                        render() {
                            return (
                                <div className="_namespace">
                                    ${component.chinese}
                                </div>
                            )
                        }
                    }
                `)

                fs.writeFileSync(`${componentRootPath}/${component.name}/${component.name}.type.ts`, `
                    import * as React from 'react'

                    export interface PropsDefine {

                    }
                    
                    export class Props implements PropsDefine {
                        
                    }
                    
                    export interface StateDefine {
                    
                    }
                    
                    export class State implements StateDefine {
                    
                    }
                `)

                fs.writeFileSync(`${componentRootPath}/demo/1.basic.tsx`, `
                    import * as React from 'react'
                    import {observer} from 'mobx-react'
                    import ${camelComponentName} from '../index'
                    
                    @observer
                    export default class Demo extends React.Component <any, any> {
                        static title = '基本用法'
                        static description = \`\`
                    
                        render() {
                            return (
                                <${camelComponentName} />
                            )
                        }
                    }
                `)
            }
        })
    })
}