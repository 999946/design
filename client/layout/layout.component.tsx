import * as React from 'react'
import * as classNames from 'classnames'
import * as typings from './layout.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import {browserHistory} from '../main.browser'

import './layout.scss'

let MobxReactDevtools: any
if (process.env['NODE_ENV'] !== 'production') {
    MobxReactDevtools = require('mobx-react-devtools').default
}

@inject('application') @observer
export default class Layout extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private handleSceneChangeBind = this.handleSceneChange.bind(this)
    private handleSceneLoadedBind = this.handleSceneLoaded.bind(this)

    componentWillMount() {
        this.props.application.event.on(this.props.application.event.sceneChange, this.handleSceneChangeBind)
        this.props.application.event.on(this.props.application.event.sceneLoaded, this.handleSceneLoadedBind)

        browserHistory.listen(location=> {
            if (this.props.application.lastUrlPath === '') {
                // 初始不会触发 change
                this.props.application.setLastUrlPath(location.pathname)
            } else {
                if (location.pathname !== this.props.application.lastUrlPath) {
                    // 只有 url path 改变才会触发 change
                    this.props.application.setLastUrlPath(location.pathname)
                    this.props.application.event.emit(this.props.application.event.sceneChange)
                }
            }
        })
    }

    componentWillUnmount() {
        this.props.application.event.off(this.props.application.event.sceneChange, this.handleSceneChangeBind)
        this.props.application.event.off(this.props.application.event.sceneLoaded, this.handleSceneLoadedBind)
    }

    /**
     * 开始切换场景
     */
    handleSceneChange() {
        this.setState({
            loadingStatus: 'start'
        })
    }

    /**
     * 场景加载完毕
     */
    handleSceneLoaded() {
        setTimeout(()=> {
            this.setState({
                loadingStatus: 'end'
            })
        }, 100)
    }

    render() {
        const loadingStyle = {
            top: 0,
            height: this.props.application.headerHeight
        }

        const loadingClasses = classNames({
            'loading': true,
            'loading-start': this.state.loadingStatus === 'start',
            'loading-end': this.state.loadingStatus === 'end'
        })

        switch (this.props.routes[1].path) {
            case 'publish-web':
                return this.props.children
            case 'publish-native':
                return this.props.children
            default:
                return (
                    <div className="_namespace">
                        <div className="nav-bar-container"
                             style={{height: this.props.application.headerHeight}}>
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
                            </div>

                            <div className="nav-bar-second-container">

                            </div>
                        </div>

                        <div className={loadingClasses}
                             style={loadingStyle}></div>

                        {this.props.children}

                        {process.env['NODE_ENV'] !== 'production' && <MobxReactDevtools/>}
                    </div>
                )
        }
    }
}