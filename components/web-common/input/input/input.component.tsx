import * as React from 'react'
import * as typings from './input.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'
import validator from './validate'

import './input.scss'

/**
 * 抽出子元素的布局样式
 */
const separateLayoutStyle = (props: typings.PropsDefine)=> {
    const cloneStyle: React.CSSProperties = _.cloneDeep(props.style) || {}
    let separateStyle: any = {}
    const layoutStyles = ['width', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
    layoutStyles.forEach((styleName: string)=> {
        separateStyle[styleName] = _.cloneDeep(cloneStyle[styleName])
        cloneStyle[styleName] = null
    })
    return {
        separateStyle: separateStyle,
        originStyle: cloneStyle
    }
}

@TransmitTransparently()
export default class Input extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        // 同步到自己的value
        this.setState({
            value: this.props.value || this.props.defaultValue
        })
    }

    handleInputChange(event: any) {
        this.props.onChange(event)

        const validateResult = this.props.validateMiddleware(event.target.value, validator)
        this.setState({
            hasError: !validateResult.ok,
            errorMessage: validateResult.errorMessage,
            value: event.target.value
        })
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        // 获取焦点时高亮的dom
        let Highlight: React.ReactElement<any> = null
        if (this.props.highlight) {
            Highlight = <span className="highlight"/>
        }

        // input 的样式加在父级上
        const {separateStyle, originStyle} = separateLayoutStyle(this.props)

        const inputClasses = classNames({
            'input': true,
            'no-label': this.props.label === '',
            [this.props.textAlign]: true
        })

        const labelClasses = classNames({
            'label': true,
            [this.props.textAlign]: true,
            'disabled': this.props.disabled,
            'valid-disabled': this.props.disabled && this.state.value !== null && this.state.value !== undefined
        })

        const bottomBarClasses = classNames({
            'bottom-bar': true,
            'bottom-bar-error': this.state.hasError
        })

        let HighlightLine: React.ReactElement<any> = null
        if (this.props.highlightLine) {
            HighlightLine = <span className={bottomBarClasses}/>
        }

        // 错误文字提示
        let ErrorLabel: React.ReactElement<any> = null
        if (this.state.hasError) {
            ErrorLabel = <span className="label-error">{this.state.errorMessage}</span>
        }

        return (
            <div className={classes}
                 style={separateStyle}>
                <input {...this.props.others}
                    style={originStyle}
                    required={true}
                    disabled={this.props.disabled}
                    onChange={this.handleInputChange.bind(this) }
                    className={inputClasses}/>
                <div className="right-addon">
                    {this.props.rightRender() }
                </div>
                {this.props.innerRender.constructor.name === 'Function' ? this.props.innerRender() : this.props.innerRender}
                {Highlight}
                {HighlightLine}
                <label className={labelClasses}>{this.props.label}{ErrorLabel}</label>
            </div>
        )
    }
}
                