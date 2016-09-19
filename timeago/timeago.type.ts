import * as React from 'react'
import {HTMLAttributes} from 'react'

export interface PropsDefine extends HTMLAttributes {
    /**
     * 需要处理的时间
     */
    date: Date

    /**
     * 是否跟随时间自动变化
     */
    live?: boolean

    /**
     * 外层dom标签
     */
    component?: string

    /**
     * 多久以后的时间会失效,失效指的是不再显示友好时间,直接显示 YYYY-MM-DD HH:mm:ss
     */
    loseTime?: number

    /**
     * 失效时间的格式化类型
     */
    loseFormat?: string

    /**
     * 组件在更新前等待的最少秒数
     */
    minPeriod?: number

    /**
     * 每隔多久更新一次时间,默认无限大
     */
    maxPeriod?: number

    /**
     * 定制各类提示语句
     */
    customLabel?: Label

    /**
     * 格式化方法
     */
    formatter?: (value: number, unit: string, suffix: string, then: any)=>string

    others?: any
}

export class PropsGaea {
    gaeaName = '友好时间'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-timeago'
}

export class Props extends PropsGaea implements PropsDefine {
    date = new Date()
    live = true
    component = 'span'
    loseTime = Infinity
    loseFormat = 'YYYY-MM-DD HH:mm:ss'
    minPeriod = 0
    maxPeriod = Infinity
    customLabel = new Label()
    formatter = (value: number, unit: string, suffix: string, then: any): string => {
        if (value !== 1) {
            unit += 's'
        }
        return value + ' ' + unit + ' ' + suffix
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}

export class Label {
    ago: string = 'ago'
    fromNow: string = 'from now'
    second: string = 'second'
    minute: string = 'minute'
    hour: string = 'hour'
    day: string = 'day'
    week: string = 'week'
    month: string = 'month'
    year: string = 'year'
}
                