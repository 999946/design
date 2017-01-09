import * as React from 'react'
import * as typings from './radio.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'

import './radio.scss'

@TransmitTransparently()
export default class Radio extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    constructor(props: typings.PropsDefine) {
        super(props)

        let checked: boolean

        if (this.props.defaultChecked !== undefined) {
            checked = this.props.defaultChecked
        }

        if (this.props.checked !== undefined) {
            checked = this.props.checked
        }

        this.state = {
            checked
        }
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if (nextProps.checked !== null) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange(event: any) {
        this.setState({
            checked: event.target.checked
        }, () => {
            this.props.onChange(this.state.checked)
        })
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'i-checks': true,
            'i-checks-lg': this.props.size === 'large',
            'i-checks-sm': this.props.size === 'small',
            'disabled': this.props.disabled,
            [this.props.className]: !!this.props.className
        })

        return (
            <label {...this.props.others} className={classes}>
                <input type="radio"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this) }/>
                <i></i>
                <span>{this.props.children}</span>
            </label>
        )
    }
}
                