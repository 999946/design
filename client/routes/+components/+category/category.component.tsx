import * as React from 'react'
import * as typings from './category.type'
import * as classNames from 'classnames'
import {observer, inject} from 'mobx-react'
import components from '../../../../components'
import thirdComponents from '../../../../third-components'
import {Link} from 'react-router'

import './category.scss'

@inject('application') @observer
export default class ComponentsCategory extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.application.event.emit(this.props.application.event.sceneLoaded)
    }

    componentWillReceiveProps() {
        this.props.application.event.emit(this.props.application.event.sceneLoaded)
    }

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
        body.style.overflow = 'hidden'
    }

    componentWillUnmount() {
        const body = document.getElementsByTagName('body')[0]
        body.style.overflow = 'auto'
    }

    /**
     * 渲染自定义组件
     */
    renderCustomComponents() {
        const category = components.find(category=>category.name === this.props.params.category)
        let LeftMenu: React.ReactElement<any> | Array<React.ReactElement<any>>

        if (category.components.length === 0) {
            LeftMenu = (
                <div className="empty">暂无组件</div>
            )
        } else {
            LeftMenu = category.components.map((component, index)=> {
                const classes = classNames({
                    'component-item': true,
                    'active': component.name === this.props.params.component
                })

                let toPath = `/components/${this.props.params.category}/${component.name}`
                if (this.props.routes[4] && this.props.routes[4].path) {
                    toPath += `/${this.props.routes[4].path}`
                }

                return (
                    <Link key={index}
                          className={classes}
                          to={toPath}>{component.chinese}</Link>
                )
            })
        }

        return (
            <div className="_namespace">
                <div className="left-menu">{LeftMenu}</div>
                <div className="right-component">
                    {this.props.children}
                </div>
            </div>
        )
    }

    renderThirdComponents() {
        let LeftMenu: React.ReactElement<any> | Array<React.ReactElement<any>>

        if (thirdComponents.length === 0) {
            LeftMenu = (
                <div className="empty">暂无组件</div>
            )
        } else {
            LeftMenu = thirdComponents.map((component, index)=> {
                const classes = classNames({
                    'component-item': true,
                    'active': component.name === this.props.params.component
                })

                let toPath = `/components/third-components/${component.name}`

                return (
                    <Link key={index}
                          className={classes}
                          to={toPath}>{component.name}</Link>
                )
            })
        }

        return (
            <div className="_namespace">
                <div className="left-menu">{LeftMenu}</div>
                <div className="right-component">
                    {this.props.children}
                </div>
            </div>
        )
    }

    render() {
        if (!this.props.routes[2]) {
            return this.renderCustomComponents.call(this)
        }

        switch (this.props.routes[2].path) {
            case 'third-components':
                return this.renderThirdComponents.call(this)
            default:
                return this.renderCustomComponents.call(this)
        }
    }
}