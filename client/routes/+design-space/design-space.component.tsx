import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './design-space.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

@observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                design-space
                <Link to="/designer">Designer</Link>
            </div>
        )
    }
}