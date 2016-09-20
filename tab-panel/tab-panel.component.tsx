import * as React from 'react'
import * as typings from './tab-panel.type'
import * as classNames from 'classnames'
import {TransmitTransparently} from '../../../common/transmit-transparently/index'

@TransmitTransparently()
export default class TabPanel extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        if (!this.props.active) {
            return null
        }

        return (
            <div {...this.props.others} className={classes}>
                {this.props.children}
            </div>
        )
    }
}
                