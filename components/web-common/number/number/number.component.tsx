import * as React from 'react'
import * as typings from './number.type'
import * as classNames from 'classnames'

import {Button} from '../../button/index'
import {Input} from '../../input/index'
import {others} from '../../../common/transmit-transparently'
import {autoBindMethod} from '../../../common/auto-bind/index'
import parseToNumber from './parse-to-number'

import './number.scss'

let interval: any

export default class Number extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.setState({
            value: this.props.value ? parseToNumber(this.props.value, this, true) : parseToNumber(this.props.defaultValue, this, true)
        })
    }

    // 鼠标松开后停止计数
    @autoBindMethod handleMouseUp() {
        clearInterval(interval)
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.handleMouseUp)
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleMouseUp)
    }

    increase() {
        interval = setInterval(() => {
            this.safeSetValue((parseFloat(this.state.value) || 0) + this.props.step, true)
        }, this.props.speed)
        this.safeSetValue((parseFloat(this.state.value) || 0) + this.props.step, true)
    }

    reduce() {
        interval = setInterval(() => {
            this.safeSetValue((parseFloat(this.state.value) || 0) - this.props.step, true)
        }, this.props.speed)
        this.safeSetValue((parseFloat(this.state.value) || 0) - this.props.step, true)
    }

    // input后跟随内容
    rightRender() {
        return (
            <div className="addon">
                <Button onMouseDown={this.increase.bind(this) }
                        type="secondary">
                    <span className="fit-number-arrow-up"/>
                </Button>
                <Button onMouseDown={this.reduce.bind(this) }
                        type="secondary">
                    <span className="fit-number-arrow-down"/>
                </Button>
            </div>
        )
    }

    handleChange(value: string) {
        this.safeSetValue(value)
    }

    safeSetValue(value: string | number, fullLength?: boolean) {
        this.setState({
            value: parseToNumber(value.toString(), this, fullLength)
        })
        this.props.onChange(value.toString())
    }

    render() {
        const _others = others(new typings.Props(), this.props)
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        return (
            <Input {..._others}
                className={classes}
                value={this.state.value}
                onChange={this.handleChange.bind(this) }
                rightRender={this.rightRender.bind(this) }/>
        )
    }
}
                