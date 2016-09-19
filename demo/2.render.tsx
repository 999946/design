import * as React from 'react'
import {observer} from 'mobx-react'
import Tooltip from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '复杂内容渲染'
    static description = ``

    titleRender() {
        return (
            <div>
                这是 React 组件渲染出的内容
            </div>
        )
    }

    render() {
        return (
            <Tooltip titleRender={this.titleRender}>
                <span>通过 titleRender 函数渲染React组件</span>
            </Tooltip>
        )
    }
}