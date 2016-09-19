import * as React from 'react'
import * as typings from './radio-group.type'
import * as classNames from 'classnames'

import {Button, ButtonGroup} from '../../button/index'
import {TransmitTransparently} from '../../../common/transmit-transparently'

import './radio-group.scss'

@TransmitTransparently()
export default class RadioGroup extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    constructor(props: typings.PropsDefine) {
        super(props)

        let value = false
        if (this.props.defaultValue !== null) {
            value = this.props.defaultValue
        }
        if (this.props.value !== null) {
            value = this.props.value
        }

        this.state = {
            value: value
        }
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    handleChange(value: any, checked: boolean) {
        if (checked) {
            this.setState({
                value: value
            }, () => {
                this.props.onChange(value)
            })
        }
    }

    render() {
        let childs = React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {
                style: this.props.vertical ? {marginTop: 10} : {marginRight: 10},
                onChange: this.handleChange.bind(this, child.props.value),
                checked: this.state.value === child.props.value
            })
        })

        const classes = classNames({
            '_namespace': true,
            'vertical': this.props.vertical,
            [this.props.className]: !!this.props.className
        })

        switch (this.props.type) {
            case 'button':
                let buttonChilds = React.Children.map(this.props.children, (child: any) => {
                    let props = {
                        onClick: this.handleChange.bind(this, child.props.value, true),
                        active: this.state.value === child.props.value,
                        disabled: child.props.disabled
                    }
                    return (
                        <Button {...props}>{child.props.children}</Button>
                    )
                })
                return (
                    <ButtonGroup {...this.props.others} className={classes}
                                                        vertical={this.props.vertical}>
                        {buttonChilds}
                    </ButtonGroup>
                )
            default:
                return (
                    <div {...this.props.others} className={classes}>
                        {childs}
                    </div>
                )
        }
    }
}
                