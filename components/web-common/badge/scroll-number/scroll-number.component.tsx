import * as React from 'react'
import * as typings from './scroll-number.type'

import {TransmitTransparently} from 'nt-transmit-transparently'
import * as _ from 'lodash'
import {isCssAnimationSupported} from 'css-animation'

import './scroll-number.scss'

const getNumberArray = (num: number | string) => {
    return num ? num.toString().split('').reverse().map(i => Number(i)) : []
}

@TransmitTransparently()
export default class ScrollNumber extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private lastCount: number | string

    constructor(props: any) {
        super(props)
        this.state = {
            animateStarted: true,
            count: props.count
        }
    }

    getPositionByNum(num: number, i: number) {
        if (this.state.animateStarted) {
            return 10 + num
        }
        const currentDigit = getNumberArray(this.state.count)[i]
        const lastDigit = getNumberArray(this.lastCount)[i]
        // 同方向则在同一侧切换数字
        if (this.state.count > this.lastCount) {
            if (currentDigit >= lastDigit) {
                return 10 + num
            }
            return 20 + num
        }
        if (currentDigit <= lastDigit) {
            return 10 + num
        }
        return num
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if ('count' in nextProps) {
            if (this.state.count === nextProps.count) {
                return
            }
            this.lastCount = this.state.count
            // 复原数字初始位置
            this.setState({
                animateStarted: true
            }, () => {
                // 等待数字位置复原完毕
                // 开始设置完整的数字
                setTimeout(() => {
                    this.setState({
                        animateStarted: false,
                        count: nextProps.count
                    }, () => {
                        this.props.onAnimated()
                    })
                }, 5)
            })
        }
    }

    renderNumberList() {
        const childrenToReturn: any = []
        for (let i = 0; i < 30; i++) {
            childrenToReturn.push(<p key={i}>{i % 10}</p>)
        }
        return childrenToReturn
    }

    renderCurrentNumber(num: number, i: number) {
        const position = this.getPositionByNum(num, i)
        const height = this.props.height
        const removeTransition = this.state.animateStarted || (getNumberArray(this.lastCount)[i] === undefined)

        return React.createElement('span', {
            className: `only`,
            style: {
                transition: removeTransition && 'none',
                WebkitTransform: `translate3d(0, ${-position * height}px, 0)`,
                transform: `translate3d(0, ${-position * height}px, 0)`,
                height
            },
            key: i
        }, this.renderNumberList())
    }

    renderNumberElement(): any {
        if (!this.state.count || isNaN(parseInt(this.state.count.toString()))) {
            return this.state.count
        }
        return getNumberArray(this.state.count).map((num, i) => this.renderCurrentNumber(num, i)).reverse()
    }

    render() {
        const props: any = _.assign({}, this.props.others, {
            className: `scroll-number ${this.props.className} _namespace`
        })

        const isBrowser = (typeof document !== 'undefined' && typeof window !== 'undefined')

        if (isBrowser && isCssAnimationSupported) {
            return React.createElement(
                this.props.component,
                props,
                this.renderNumberElement()
            )
        }

        return React.createElement(
            this.props.component,
            props,
            props['count']
        )
    }
}