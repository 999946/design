import * as React from 'react'
import {browserHistory} from 'react-router'
import * as typings from './design-space.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import Button from 'fit-button'
import './design-space.scss'

@observer
export default class DesignSpace extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

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
                                onClick={this.jumpToPath.bind(this,'/designer?type=web')}>+ web 应用</Button>
                        <Button type="primary"
                                className="second-designer-jump-button"
                                onClick={this.jumpToPath.bind(this,'/designer?type=native')}>+ native 应用</Button>
                    </div>
                </div>
            </div>
        )
    }
}