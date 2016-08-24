import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './home.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import './home.scss'

@observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                <div className="hero">
                    <div className="container nav-bar">
                        <div className="nav-bar-second-container">
                            <Link to="/"
                                  className="brand item">Next</Link>
                            <Link to="/components"
                                  className="item">组件库</Link>
                            <Link to="/design-space"
                                  className="item">在线编辑器</Link>
                        </div>

                        <div className="nav-bar-second-container">
                            <a className="github-link"
                               target="_blank"
                               href="https://github.com/fex-team/fit"><i className="fa fa-github"/></a>
                        </div>
                    </div>
                    <div className="super-content">
                        <div className="brand">Next</div>
                        <div className="description">React + ReactNative 组件化解决方案
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}