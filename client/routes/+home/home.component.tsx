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

                <div className="body-container">
                    组件库 + 图标库 + 网站在线制作 + 同步生成Native页面
                </div>

                <div className="footer">
                    <div className="footer-item-container">
                        <div className="title">Github</div>
                        <a className="item"
                           href="https://github.com/nt-team/design"
                           target="_blank">
                            总仓库
                        </a>
                        <a className="item"
                           href="https://github.com/next-component"
                           target="_blank">
                            组件仓库
                        </a>
                        <a className="item"
                           href="https://github.com/nt-team"
                           target="_blank">
                            团队
                        </a>
                    </div>

                    <div className="footer-item-container">
                        <div className="title">相关站点</div>
                        <a className="item"
                           href="http://updater.next.baidu.com"
                           target="_blank">
                            热更新平台
                        </a>
                    </div>

                    <div className="footer-item-container">
                        <div className="title">社区</div>
                        <a className="item"
                           href="https://github.com/nt-team/design/issues"
                           target="_blank">
                            反馈建议
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}