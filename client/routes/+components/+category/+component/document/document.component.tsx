import * as React from 'react'
import * as typings from './document.type'
import {observer, inject} from 'mobx-react'

import './document.scss'

@observer
export default class Document extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                施工中..
            </div>
        )
    }
}