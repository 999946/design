import * as React from 'react'
import * as typings from './switch.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'

import './switch.scss'

@TransmitTransparently()
export default class Switch extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        let checked = false
        if (this.props.defaultChecked !== null) {
            checked = this.props.defaultChecked
        }
        if (this.props.checked !== null) {
            checked = this.props.checked
        }

        this.state = {
            checked: checked
        }
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if (nextProps.checked !== null) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    toggle() {
        const checked = !this.state.checked
        this.setState({
            checked: checked
        })
        this.props.onChange(checked)
    }

    render() {
        const switchClassName = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className,
            'checked': this.state.checked,
            'disabled': this.props.disabled,
            [this.props.type || 'info']: true,
            [`size-${this.props.size || 'normal'}`]: true
        })

        let Switch = (
            <span {...this.props.others}
                className={switchClassName}
                onClick={this.props.disabled ? null : this.toggle.bind(this)}>
              <span className={`inner`}>
                {this.state.checked ? this.props.checkedChildrenRender : this.props.unCheckedChildrenRender}
              </span>
            </span>
        )

        return Switch
    }
}
                