import * as React from 'react'
import * as classNames from 'classnames'
import * as typings from './tree.type'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'

import '../font/index.scss'

@TransmitTransparently()
export default class Tree extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        let Children = React.Children.map(this.props.children, (item: any) => {
            return React.cloneElement(item, {
                defaultExpendAll: this.props.defaultExpendAll,
                toggleByArrow: this.props.toggleByArrow
            })
        })

        return (
            <div {...this.props.others} className={classes}>
                {Children}
            </div>
        )
    }
}
                