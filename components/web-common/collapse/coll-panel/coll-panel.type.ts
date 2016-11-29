import * as React from 'react'
import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 标题
     */
    header?: string

    /**
     * 是否激活
     */
    active?: boolean

    /**
     * 对应key
     */
    activeKey?: string|number

    /**
     * 状态被修改
     */
    onChange?: (activeKey?: string|number)=>void

    others?: any
}

export class PropsGaea {
    gaeaName = '手风琴'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-collapse'
}

export class Props extends PropsGaea implements PropsDefine {
    active = false
    activeKey = ''
    onChange = ()=> {
    }
}

export interface StateDefine {
    contentHeight?: number
    finish?: boolean
}

export class State implements StateDefine {
    contentHeight = 0
    finish = true
}
                