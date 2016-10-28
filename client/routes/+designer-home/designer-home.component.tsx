import * as React from 'react'
import * as typings from './designer-home.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import './designer-home.scss'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class DesignerHome extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
    }

    render() {
        return (
            <div className="_namespace">
                <Link to="/design/explore">浏览</Link>
                <Link to="/design/space">工作台</Link>
            </div>
        )
    }
}