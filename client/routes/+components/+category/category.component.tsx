import * as React from 'react'
import * as typings from './category.type'
import * as classNames from 'classnames'
import {observer, inject} from 'mobx-react'
import components from '../../../../components'
import {Link} from 'react-router'

import './category.scss'

@observer
export default class ComponentsCategory extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
        body.style.overflow = 'hidden'
    }

    componentWillUnmount() {
        const body = document.getElementsByTagName('body')[0]
        body.style.overflow = 'auto'
    }

    render() {
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

                return (
                    <Link key={index}
                          className={classes}
                          to={`/components/${this.props.params.category}/${component.name}`}>{component.chinese}</Link>
                )
            })
        }

        return (
            <div className="_namespace">
                <div className="left-menu">{LeftMenu}</div>
                <div className="right-component">{this.props.children}</div>
            </div>
        )
    }
}