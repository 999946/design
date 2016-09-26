import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './home.type'
import {observer, inject} from 'mobx-react'

//import * as PIXI from 'pixi.js'

import './home.scss'

@inject('application') @observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.application.event.emit(this.props.application.event.sceneLoaded)

        // const renderer = new PIXI.WebGLRenderer(600, 400)
        // document.body.appendChild(renderer.view)
        // const stage = new PIXI.Container()
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