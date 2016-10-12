import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './home.type'
import {observer, inject} from 'mobx-react'

import './home.scss'

@inject('application', 'event') @observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
    }

    render() {
        return (
            <div className="_namespace">
                <div className="hero">
                    <div className="super-content">
                        <div className="brand">Next</div>
                        <div className="description">ReactNative + Web 组件可视化解决方案</div>

                    </div>
                </div>

                <div>介绍</div>
            </div>
        )
    }
}