import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './layout.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import './layout.scss'

@observer
export default class Layout extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                <div className="nav-bar-container">
                    <div className="nav-bar-second-container">
                        <Link to="/"
                              activeClassName="active"
                              className="brand item">Next</Link>
                        <Link to="/components"
                              activeClassName="active"
                              className="item">组件库</Link>
                        <Link to="/design-space"
                              activeClassName="active"
                              className="item">工作台</Link>
                        <a href="http://fit.baidu.com/"
                           target="_blank"
                           className="item">Web组件库</a>
                    </div>

                    <div className="nav-bar-second-container">

                    </div>
                </div>

                {this.props.children}
            </div>
        )
    }
}