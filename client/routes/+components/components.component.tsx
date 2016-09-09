import * as React from 'react'
import * as typings from './components.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import * as classNames from 'classnames'
import components from '../../../components'

import './components.scss'

@inject('application') @observer
export default class Components extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const navBarCategorys = components.map((category, index)=> {
            const classes = classNames({
                'navbar-title': true,
                'active': category.name === this.props.params.category
            })
            return (
                <Link className={classes}
                      key={index}
                      to={`/components/${category.name}`}>{category.chinese}</Link>
            )
        })

        const thirdComponentsClasses = classNames({
            'navbar-title': true,
            'active': this.props.routes[2].path === 'third-components'
        })

        return (
            <div className="_namespace">
                <div className="component-nav-bar">
                    <div className="left">
                        {navBarCategorys}
                    </div>
                    <div className="right">
                        <Link className={thirdComponentsClasses}
                              to="/components/third-components">第三方库</Link>
                    </div>
                </div>
                <div style={{height: `calc(100vh - ${this.props.application.headerHeight + 50}px)`}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}