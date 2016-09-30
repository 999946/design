import * as React from 'react'
import * as typings from './number.type'
import * as classNames from 'classnames'

import {Select} from '../../select/index'
import {Input} from '../../input/index'
import {others} from '../../../common/transmit-transparently'
import {autoBindMethod} from '../../../common/auto-bind/index'
import parseToNumber from './parse-to-number'

import './number.scss'

export default class Number extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private interval: any

    componentWillMount() {
        this.setState({
            value: this.props.value ? parseToNumber(this.props.value, this, true) : parseToNumber(this.props.defaultValue, this, true),
            currentUnit: this.props.currentUnit
        })
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.handleMouseUp)
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleMouseUp)
    }

    // 鼠标松开后停止计数
    @autoBindMethod handleMouseUp() {
        clearInterval(this.interval)
    }

    /**
     * 单位被修改
     */
    @autoBindMethod handleUnitChange(value: string) {
        this.setState({
            currentUnit: value
        })
        this.props.onChange(this.state.value, value)
    }

    increase() {
        this.interval = setInterval(() => {
            this.safeSetValue((parseFloat(this.state.value) || 0) + this.props.step, true)
        }, this.props.speed)
        this.safeSetValue((parseFloat(this.state.value) || 0) + this.props.step, true)
    }

    reduce() {
        this.interval = setInterval(() => {
            this.safeSetValue((parseFloat(this.state.value) || 0) - this.props.step, true)
        }, this.props.speed)
        this.safeSetValue((parseFloat(this.state.value) || 0) - this.props.step, true)
    }

    // input后跟随内容
    rightRender() {
        if (this.props.units === null) {
            return (
                <div className="addon">
                    <span className="fit-number-arrow-up"
                          onMouseDown={this.increase.bind(this) }/>
                    <span className="fit-number-arrow-down"
                          onMouseDown={this.reduce.bind(this) }/>
                </div>
            )
        } else {
            return (
                <div className="addon-container">
                    <div className="unit-container">
                        <Select style={{width:37,marginTop:4}}
                                defaultValue={this.props.currentUnit}
                                simple
                                onChange={this.handleUnitChange}
                                options={this.props.units}/>
                    </div>

                    <div className="addon">
                    <span className="fit-number-arrow-up"
                          onMouseDown={this.increase.bind(this) }/>
                        <span className="fit-number-arrow-down"
                              onMouseDown={this.reduce.bind(this) }/>
                    </div>
                </div>
            )
        }
    }

    handleChange(value: string) {
        this.safeSetValue(value)
    }

    safeSetValue(value: string | number, fullLength?: boolean) {
        this.setState({
            value: parseToNumber(value.toString(), this, fullLength)
        })
        this.props.onChange(value.toString(), this.state.currentUnit)
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
                