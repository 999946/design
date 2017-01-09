import * as React from 'react'
import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 是否是手风琴模式
     */
    accordion?: boolean

    /**
     * 展开/关闭时的回调
     */
    onChange?: (key?: number|string)=>void

    /**
     * 当前展开的项
     */
    value?: string|number|Array<number|string>

    /**
     * 默认展开项
     */
    defaultValue?: string|number|Array<number|string>

    others?: any
}

export class PropsGaea {
    gaeaName = '手风琴'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-collapse'
}

export class Props extends PropsGaea implements PropsDefine {
    accordion = false
    onChange = ()=> {
    }
}

export interface StateDefine {
    /**
     * 当前展开项,初始化时是 value | defaultValue,之后只有 value 改变才会固定
     */
    value?: Array<number|string>
}

export class State implements StateDefine {

}
                