import * as React from 'react'
import {HTMLAttributes} from 'react'

export interface PropsDefine extends HTMLAttributes {
    /**
     * 展示的数字,为0时候则隐藏
     */
    count?: number

    /**
     * 是否不展示数字,只显示小红点
     */
    dot?: boolean

    /**
     * 封顶数字
     */
    overflowCount?: number

    others?: any
}

export class PropsGaea {
    gaeaName = '徽标'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-badge'
}

export class Props extends PropsGaea implements PropsDefine {
    count = 0
    dot = false
    overflowCount = 99
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                