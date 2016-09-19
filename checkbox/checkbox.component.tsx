import * as React from 'react'
import * as typings from './checkbox.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'

import './checkbox.scss'

@TransmitTransparently()
export default class Checkbox extends React.Component <typings.PropsDefine, typings.StateDefine> {
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

        if (!checked) {
            checked = false
        }

        this.state = {
            checked
        }
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if ('checked' in nextProps) {
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
            [this.props['className']]: !!this.props['className']
        })

        let childs = (
            <label className={classes}>
                <input type="checkbox"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this) }/>
                <i></i>
                <span>{this.props.children}</span>
            </label>
        )

        return (
            <div {...this.props.others} className={classes}>
                {childs}
            </div>
        )
    }
}
                