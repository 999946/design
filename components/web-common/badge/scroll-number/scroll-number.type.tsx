import {HTMLAttributes} from 'react'

export interface PropsDefine extends HTMLAttributes {
    /**
     * 总数量
     */
    count?: number | string

    /**
     * 渲染的节点名称
     */
    component?: string

    /**
     * 动画中回调
     */
    onAnimated?: ()=> void

    /**
     * 数字高度
     */
    height?: number

    others?: any
}

export class Props implements PropsDefine {
    count = 0
    component = 'sup'
    onAnimated = ()=> {
    }
    height = 18
}

export interface StateDefine {
    animateStarted?: boolean
    count?: number | string
}

export class State implements StateDefine {
    animateStarted = false
    count = 0
}