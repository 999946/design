import * as React from 'react'
import * as typings from './components.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import components from '../../../components'

import './components.scss'

import Blukit from 'fit-bluekit'


@inject('application') @observer
export default class Components extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const navBarCategorys = components.map((category, index)=> {
            return (
                <Link className="navbar-title" key={index} to={`/components/${category.name}`}>{category.chinese}</Link>
            )
        })

        return (
            <div className="_namespace">
                <div className="component-nav-bar">
                    <div className="left">
                        {navBarCategorys}
                    </div>
                </div>
                <div style={{height: `calc(100vh - ${this.props.application.headerHeight + 50}px)`}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}