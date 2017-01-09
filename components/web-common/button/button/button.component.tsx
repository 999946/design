import * as React from 'react'
import * as classNames from 'classnames'
import * as ReactDOM from 'react-dom'
import * as typings from './button.type'
import './button.scss'

import {others} from '../../../common/transmit-transparently/index'

const hasClass = (obj: HTMLElement, cls: string) => {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

const removeClass = (obj: HTMLElement, cls: string) => {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        obj.className = obj.className.replace(reg, ' ')
    }
}

export default class Button extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private selfDom: Element

    componentDidMount() {
        this.selfDom = ReactDOM.findDOMNode(this)
    }

    handleClick(event: React.MouseEvent) {
        if (this.props.disabled || this.props.loading)return
        this.props.onClick(event)

        // 绑定 material 效果
        let d: number, x: number, y: number
        let taint = this.selfDom.querySelector('.taint') as HTMLElement

        if (!taint) {
            taint = document.createElement('div')
            taint.className = 'taint'
            this.selfDom.appendChild(taint)
        }

        removeClass(taint, 'drop')

        const selfDomBoundingClientRect = this.selfDom.getBoundingClientRect()
        if (!taint.clientHeight && !taint.clientWidth) {
            d = Math.max(selfDomBoundingClientRect.width, selfDomBoundingClientRect.height)
            taint.style.height = d + 'px'
            taint.style.width = d + 'px'
        }

        x = event.pageX - selfDomBoundingClientRect.left - taint.clientWidth / 2
        y = event.pageY - selfDomBoundingClientRect.top - taint.clientHeight / 2
        taint.className += ' drop'
        taint.style.top = y + 'px'
        taint.style.left = x + 'px'
    }

    render() {
        // addon
        let addon: any = null
        if (this.props.addonLeft || this.props.addonRight) {
            let addonClass = classNames({
                'fa': true,
                ['fa-' + (this.props.addonLeft || this.props.addonRight)]: true,
                'btn-addon-left': this.props.addonLeft,
                'btn-addon-right': this.props.addonRight
            })
            addon = (
                <i className={addonClass}></i>
            )
        }

        // loading
        let loadingComponent: any = null
        if (this.props.loading === true) {
            let loadingClass = classNames({
                'loading-container': true,
                'show': true
            })
            loadingComponent = (
                <div className={loadingClass}>
                    <i className="fit-button-loading animation-spin"/>
                </div>
            )
        }

        const btnClass = classNames({
            '_namespace': true,
            'btn': true,
            ['btn-' + this.props.type]: true,
            'disabled': this.props.disabled || this.props.loading === true,
            'btn-addon': this.props.addonLeft || this.props.addonRight,
            'btn-rounded': this.props.rounded,
            'active': this.props.active,
            [this.props.className]: !!this.props.className
        })

        const _others = others(new typings.Props(), this.props)

        return (
            <button {..._others}
                onClick={this.handleClick.bind(this)}
                className={btnClass}>
                <div className="button-container">
                    {this.props.addonLeft ? addon : null}
                    <div className="text-child">{this.props.children}</div>
                    {this.props.addonRight ? addon : null}
                    {this.props.loading ? loadingComponent : null}
                </div>
            </button>
        )
    }
}
