import * as React from 'react'
import * as classNames from 'classnames'
import * as typings from './button-group.type'
import './button-group.scss'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'

@TransmitTransparently('className')
export default class ButtonGroup extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const groupClass = classNames({
            '_namespace': true,
            'btn-group': !this.props.vertical,
            'btn-group-vertical': this.props.vertical,
            [this.props.className]: !!this.props.className
        })

        return (
            <div {...this.props.others} className={groupClass}>
                {this.props.children}
            </div>
        )
    }
}