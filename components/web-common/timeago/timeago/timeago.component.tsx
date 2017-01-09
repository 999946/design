import * as React from 'react'
import * as typings from './timeago.type'
import * as moment from 'moment'
import * as _ from 'lodash'

import {TransmitTransparently} from 'nt-transmit-transparently'

@TransmitTransparently()
export default class Timeago extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private _isMounted: boolean
    private timeoutId: any

    constructor(props: any) {
        super(props)
    }

    protected componentWillMount(): void {
        this._isMounted = true
        this.timeoutId = 0
    }

    protected componentDidMount(): void {
        if (this.props.live) {
            this.tick(true)
        }
    }

    protected componentDidUpdate(nextProps: typings.PropsDefine): void {
        if (this.props.live !== nextProps.live || this.props.date !== nextProps.date) {
            if (!this.props.live && this.timeoutId) {
                clearTimeout(this.timeoutId)
                this.timeoutId = undefined
            }
            this.tick()
        }
    }

    protected componentWillUnmount(): void {
        this._isMounted = false
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
            this.timeoutId = undefined
        }
    }

    protected tick(refresh?: boolean): void {
        if (!this._isMounted || !this.props.live) {
            return
        }

        let period = 1000

        let then = this.props.date.valueOf()
        let now = Date.now()
        let seconds = Math.round(Math.abs(now - then) / 1000)

        if (seconds < 60) {
            period = 1000
        } else if (seconds < 60 * 60) {
            period = 1000 * 60
        } else if (seconds < 60 * 60 * 24) {
            period = 1000 * 60 * 60
        } else {
            period = 0
        }

        period = Math.min(Math.max(period, this.props.minPeriod), this.props.maxPeriod)

        if (!!period) {
            this.timeoutId = setTimeout(()=> {
                this.tick()
            }, period)
        }

        if (!refresh) {
            this.forceUpdate()
        }
    }

    public render() {
        const _others = Object.assign({}, this.props.others)
        let then = this.props.date.valueOf()
        let now = Date.now()

        if (now - then >= this.props.loseTime) { // 友好时间失效了
            let fullDate = moment(this.props.date)
            let formatString = fullDate.format(this.props.loseFormat)

            return React.createElement(this.props.component, _others, formatString)
        } else {
            let seconds = Math.round(Math.abs(now - then) / 1000)
            let suffix = then < now ? this.props.customLabel.ago : this.props.customLabel.fromNow
            let value: number, unit: string

            if (seconds < 60) {
                value = Math.round(seconds)
                unit = this.props.customLabel.second
            } else if (seconds < 60 * 60) {
                value = Math.round(seconds / 60)
                unit = this.props.customLabel.minute
            } else if (seconds < 60 * 60 * 24) {
                value = Math.round(seconds / (60 * 60))
                unit = this.props.customLabel.hour
            } else if (seconds < 60 * 60 * 24 * 7) {
                value = Math.round(seconds / (60 * 60 * 24))
                unit = this.props.customLabel.day
            } else if (seconds < 60 * 60 * 24 * 30) {
                value = Math.round(seconds / (60 * 60 * 24 * 7))
                unit = this.props.customLabel.week
            } else if (seconds < 60 * 60 * 24 * 365) {
                value = Math.round(seconds / (60 * 60 * 24 * 30))
                unit = this.props.customLabel.month
            } else {
                value = Math.round(seconds / (60 * 60 * 24 * 365))
                unit = this.props.customLabel.year
            }

            let fullDate = moment(this.props.date)
            let newProps = _.assign({}, _others, {
                title: fullDate.format(this.props.loseFormat)
            })

            return React.createElement(this.props.component, newProps, this.props.formatter(value, unit, suffix, then))
        }
    }
}
                