import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './margin-padding-editor.type'
import * as classNames from 'classnames'
import {autoBindMethod} from '../../../common/auto-bind/index'
import './margin-padding-editor.scss'

export default class MarginPaddingEditor extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 上一次鼠标 x, y 位置
    private lastX: number = null as any
    private lastY: number = null as any

    // 当前按住的类型
    private currentHolding: typings.MarginPaddingField = ''

    componentWillMount() {
        this.setState({
            paddingLeft: this.props.paddingLeft,
            paddingTop: this.props.paddingTop,
            paddingRight: this.props.paddingRight,
            paddingBottom: this.props.paddingBottom,
            marginLeft: this.props.marginLeft,
            marginTop: this.props.marginTop,
            marginRight: this.props.marginRight,
            marginBottom: this.props.marginBottom
        })
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
    }

    /**
     * 鼠标按下
     */
    handleMouseDown(name: typings.MarginPaddingField, event: MouseEvent) {
        this.lastX = event.clientX
        this.lastY = event.clientY
        this.currentHolding = name
    }

    /**
     * 鼠标移动监听处理
     */
    @autoBindMethod
    handleMouseMove(event: MouseEvent) {
        const diffX = event.clientX - this.lastX
        const diffY = event.clientY - this.lastY
        switch (this.currentHolding) {
            case 'marginLeft':
                this.setState({
                    marginLeft: this.state.marginLeft -= diffX
                })
                this.props.onChange(this.currentHolding, this.state.marginLeft)
                break
            case 'paddingLeft':
                this.setState({
                    paddingLeft: this.state.paddingLeft -= diffX
                })
                this.props.onChange(this.currentHolding, this.state.paddingLeft)
                break
            case 'marginRight':
                this.setState({
                    marginRight: this.state.marginRight += diffX
                })
                this.props.onChange(this.currentHolding, this.state.marginRight)
                break
            case 'paddingRight':
                this.setState({
                    paddingRight: this.state.paddingRight += diffX
                })
                this.props.onChange(this.currentHolding, this.state.paddingRight)
                break
            case 'marginTop':
                this.setState({
                    marginTop: this.state.marginTop -= diffY
                })
                this.props.onChange(this.currentHolding, this.state.marginTop)
                break
            case 'paddingTop':
                this.setState({
                    paddingTop: this.state.paddingTop -= diffY
                })
                this.props.onChange(this.currentHolding, this.state.paddingTop)
                break
            case 'marginBottom':
                this.setState({
                    marginBottom: this.state.marginBottom += diffY
                })
                this.props.onChange(this.currentHolding, this.state.marginBottom)
                break
            case 'paddingBottom':
                this.setState({
                    paddingBottom: this.state.paddingBottom += diffY
                })
                this.props.onChange(this.currentHolding, this.state.paddingBottom)
                break
        }
        this.lastX = event.clientX
        this.lastY = event.clientY
    }

    /**
     * 鼠标松开
     */
    @autoBindMethod
    handleMouseUp() {
        this.currentHolding = ''
    }

    handleChange(name: typings.MarginPaddingField, event: any) {
        this.setState({
            [name]: Number(event.target.value)
        })
        this.props.onChange(name, Number(event.target.value))
    }

    renderTriangle(position: string, name: string, extendStyle: React.CSSProperties = {}) {
        let style: React.CSSProperties = Object.assign(extendStyle, {
            width: 0,
            height: 0
        })
        const outerStyle: React.CSSProperties = {}
        const classes = classNames({
            'button': true,
            'button-left': position === 'left',
            'button-top': position === 'top',
            'button-right': position === 'right',
            'button-bottom': position === 'bottom'
        })

        const normalBorderWidth = this.props.size / 4
        const specialBorderWidth = this.props.size / 5
        const outerWidth = this.props.size / 20
        const outerSpace = this.props.size / 40

        switch (position) {
            case 'left':
                style.borderTop = `${normalBorderWidth}px solid transparent`
                style.borderBottom = `${normalBorderWidth}px solid transparent`
                style.borderRightStyle = 'solid'
                style.borderRightWidth = specialBorderWidth
                outerStyle.width = outerWidth
                break
            case 'top':
                style.borderLeft = `${normalBorderWidth}px solid transparent`
                style.borderRight = `${normalBorderWidth}px solid transparent`
                style.borderBottomStyle = 'solid'
                style.borderBottomWidth = specialBorderWidth
                outerStyle.height = outerWidth
                break
            case 'right':
                style.borderTop = `${normalBorderWidth}px solid transparent`
                style.borderBottom = `${normalBorderWidth}px solid transparent`
                style.borderLeftStyle = 'solid'
                style.borderLeftWidth = specialBorderWidth
                outerStyle.width = outerWidth
                break
            case 'bottom':
                style.borderLeft = `${normalBorderWidth}px solid transparent`
                style.borderRight = `${normalBorderWidth}px solid transparent`
                style.borderTopStyle = 'solid'
                style.borderTopWidth = specialBorderWidth
                outerStyle.height = outerWidth
                break
        }

        switch (name) {
            case 'marginLeft':
                style.marginLeft = -specialBorderWidth / 2
                break
            case 'paddingLeft':
                style.marginLeft = -outerWidth
                outerStyle.marginLeft = outerSpace
                break
            case 'marginTop':
                style.marginTop = -specialBorderWidth / 2
                break
            case 'paddingTop':
                style.marginTop = -outerWidth
                outerStyle.marginTop = outerSpace
                break
            case 'marginRight':
                style.marginLeft = -outerWidth
                outerStyle.marginLeft = outerSpace
                break
            case 'paddingRight':
                style.marginLeft = -specialBorderWidth / 2
                break
            case 'marginBottom':
                style.marginTop = -outerWidth
                outerStyle.marginTop = outerSpace
                break
            case 'paddingBottom':
                style.marginTop = -specialBorderWidth / 2
                break
        }

        return (
            <div className="button-container"
                 style={outerStyle}>
                <div className={classes}
                     draggable={false}
                     onMouseDown={this.handleMouseDown.bind(this, name)}
                     style={style}/>
            </div>
        )
    }

    handleInputLeave(name: typings.MarginPaddingField) {
        if (this.currentHolding !== '') {
            return
        }
        const inputElement = ReactDOM.findDOMNode(this.refs[name + 'Input']) as HTMLInputElement
        inputElement.blur()
    }

    handleInputEnter(name: typings.MarginPaddingField) {
        if (this.currentHolding !== '') {
            return
        }
        const inputElement = ReactDOM.findDOMNode(this.refs[name + 'Input']) as HTMLInputElement
        inputElement.focus()
        inputElement.select()
    }

    render() {
        const normalBorderWidth = this.props.size / 4
        const specialBorderWidth = this.props.size / 7

        const containerStyle = {
            width: this.props.size,
            height: this.props.size
        }

        const leftStyle = {
            left: specialBorderWidth,
            top: this.props.size / 2 - normalBorderWidth
        }

        const topStyle = {
            top: specialBorderWidth,
            left: this.props.size / 2 - normalBorderWidth
        }

        const rightStyle = {
            right: specialBorderWidth,
            top: this.props.size / 2 - normalBorderWidth
        }

        const bottomStyle = {
            bottom: specialBorderWidth,
            left: this.props.size / 2 - normalBorderWidth
        }

        const numberOuterLeftStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            left: 0,
            top: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberOuterTopStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            top: 0,
            left: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberOuterRightStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            right: 0,
            top: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberOuterBottomStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            bottom: 0,
            left: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberInnerLeftStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            left: this.props.size / 3 - specialBorderWidth / 2,
            top: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberInnerTopStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            top: this.props.size / 3 - specialBorderWidth / 2,
            left: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberInnerRightStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            right: this.props.size / 3 - specialBorderWidth / 2,
            top: this.props.size / 2 - specialBorderWidth / 2
        }

        const numberInnerBottomStyle = {
            width: specialBorderWidth,
            height: specialBorderWidth,
            bottom: this.props.size / 3 - specialBorderWidth / 2,
            left: this.props.size / 2 - specialBorderWidth / 2
        }

        return (
            <div className="_namespace"
                 style={containerStyle}>
                <div className="left"
                     style={leftStyle}>
                    {this.renderTriangle('left', 'marginLeft')}
                    {this.renderTriangle('right', 'paddingLeft', {marginLeft: 5})}
                </div>
                <div className="right"
                     style={rightStyle}>
                    {this.renderTriangle('left', 'paddingRight')}
                    {this.renderTriangle('right', 'marginRight', {marginLeft: 5})}
                </div>
                <div className="top"
                     style={topStyle}>
                    {this.renderTriangle('top', 'marginTop')}
                    {this.renderTriangle('bottom', 'paddingTop', {marginTop: 5})}
                </div>
                <div className="bottom"
                     style={bottomStyle}>
                    {this.renderTriangle('top', 'paddingBottom')}
                    {this.renderTriangle('bottom', 'marginBottom', {marginTop: 5})}
                </div>

                <div className="number"
                     style={numberOuterLeftStyle}>
                    <input className="input"
                           ref="marginLeftInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'marginLeft')}
                           onMouseLeave={this.handleInputLeave.bind(this,'marginLeft')}
                           onChange={this.handleChange.bind(this,'marginLeft')}
                           value={this.state.marginLeft}/>
                </div>
                <div className="number"
                     style={numberOuterTopStyle}>
                    <input className="input"
                           ref="marginTopInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'marginTop')}
                           onMouseLeave={this.handleInputLeave.bind(this,'marginTop')}
                           onChange={this.handleChange.bind(this,'marginTop')}
                           value={this.state.marginTop}/>
                </div>
                <div className="number"
                     style={numberOuterRightStyle}>
                    <input className="input"
                           ref="marginRightInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'marginRight')}
                           onMouseLeave={this.handleInputLeave.bind(this,'marginRight')}
                           onChange={this.handleChange.bind(this,'marginRight')}
                           value={this.state.marginRight}/>
                </div>
                <div className="number"
                     style={numberOuterBottomStyle}>
                    <input className="input"
                           ref="marginBottomInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'marginBottom')}
                           onMouseLeave={this.handleInputLeave.bind(this,'marginBottom')}
                           onChange={this.handleChange.bind(this,'marginBottom')}
                           value={this.state.marginBottom}/>
                </div>

                <div className="number"
                     style={numberInnerLeftStyle}>
                    <input className="input"
                           ref="paddingLeftInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'paddingLeft')}
                           onMouseLeave={this.handleInputLeave.bind(this,'paddingLeft')}
                           onChange={this.handleChange.bind(this,'paddingLeft')}
                           value={this.state.paddingLeft}/>
                </div>
                <div className="number"
                     style={numberInnerTopStyle}>
                    <input className="input"
                           ref="paddingTopInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'paddingTop')}
                           onMouseLeave={this.handleInputLeave.bind(this,'paddingTop')}
                           onChange={this.handleChange.bind(this,'paddingTop')}
                           value={this.state.paddingTop}/>
                </div>
                <div className="number"
                     style={numberInnerRightStyle}>
                    <input className="input"
                           ref="paddingRightInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'paddingRight')}
                           onMouseLeave={this.handleInputLeave.bind(this,'paddingRight')}
                           onChange={this.handleChange.bind(this,'paddingRight')}
                           value={this.state.paddingRight}/>
                </div>
                <div className="number"
                     style={numberInnerBottomStyle}>
                    <input className="input"
                           ref="paddingBottomInput"
                           onMouseEnter={this.handleInputEnter.bind(this,'paddingBottom')}
                           onMouseLeave={this.handleInputLeave.bind(this,'paddingBottom')}
                           onChange={this.handleChange.bind(this,'paddingBottom')}
                           value={this.state.paddingBottom}/>
                </div>
            </div>
        )
    }
}
                