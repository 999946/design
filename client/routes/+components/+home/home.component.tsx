import * as React from 'react'
import * as typings from './home.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import './home.scss'

@observer
export default class ComponentsHome extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                <h1>Next 组件库</h1>
                <br/>
                <p>同时兼容 web 与 react-native 的组件库</p>
            </div>
        )
    }
}