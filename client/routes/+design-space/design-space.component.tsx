import * as React from 'react'
import * as typings from './design-space.type'
import {observer, inject} from 'mobx-react'
import {browserHistory} from '../../main.browser'

import Button from '../../../components/web-common/button/index'
import './design-space.scss'

@inject('application') @observer
export default class DesignSpace extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.application.event.emit(this.props.application.event.sceneLoaded)
    }

    jumpToPath(path: string) {
        browserHistory.push(path)
    }

    render() {
        return (
            <div className="_namespace">
                <div className="navbar">
                    <div className="left">
                        <span className="navbar-title">工作台</span>
                    </div>

                    <div className="right">
                        <Button type="primary"
                                onClick={this.jumpToPath.bind(this, '/designer?type=web')}>+ web 应用</Button>
                        <Button type="primary"
                                className="second-designer-jump-button"
                                onClick={this.jumpToPath.bind(this, '/designer?type=native')}>+ native 应用</Button>
                    </div>
                </div>
            </div>
        )
    }
}