import * as React from 'react'
import * as typings from './loading.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from 'nt-transmit-transparently'

import './loading.scss'

@TransmitTransparently()
export default class Loading extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        return (
            <div {...this.props.others}
                className={classes}>
                <svg className="spinner"
                     width={this.props.size}
                     height={this.props.size}
                     viewBox="0 0 66 66">
                    <circle className="path"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            cx="33"
                            cy="33"
                            r="30"></circle>
                </svg>
            </div>
        )
    }
}
                