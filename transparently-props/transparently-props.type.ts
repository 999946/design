import * as React from 'react'
import {CSSProperties} from 'react'

export interface PropsDefine {
    /**
     * 样式
     */
    style?: CSSProperties
    /**
     * class
     */
    className?: string

    onFocus?: React.FocusEventHandler
    onKeyDown?: React.KeyboardEventHandler

    others?: any
}

export class PropsGaea {
    gaeaName = '透传属性定义'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-transparently-props'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                