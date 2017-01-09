import * as React from 'react'
import * as typings from './badge.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from 'nt-transmit-transparently'
import * as Animate from 'rc-animate'
import ScrollNumber from '../scroll-number/scroll-number.component'

import './badge.scss'

@TransmitTransparently()
export default class Badge extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        let countAfterCalculation = this.props.count > this.props.overflowCount ? `${this.props.overflowCount}+` : this.props.count

        // dot 不展示
        if (this.props.dot) {
            countAfterCalculation = ''
        }

        // null undefined "" "0" 0
        const hidden = (!countAfterCalculation || countAfterCalculation === '0') && !this.props.dot
        const scrollNumberCls = (this.props.dot ? 'dot' : 'count')

        const classes = classNames({
            '_namespace': true,
            'not-a-wrapper': !this.props.children,
            [this.props.className]: !!this.props.className
        })

        return (
            <span className={classes}
                  title={countAfterCalculation.toString()}>
                {this.props.children}
                <Animate showProp="data-show"
                         transitionName={`zoom`}
                         transitionAppear>
                    {hidden ? null :
                        <ScrollNumber data-show={!hidden}
                                      className={scrollNumberCls}
                                      count={countAfterCalculation}
                            {...this.props.others}/>
                    }
                </Animate>
            </span>
        )
    }
}
                