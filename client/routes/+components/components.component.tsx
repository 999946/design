import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './components.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import './components.scss'

@observer
export default class Components extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                111
            </div>
        )
    }
}