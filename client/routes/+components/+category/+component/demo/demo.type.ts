import * as React from 'react'
import {Demo} from '../component.type'
export {Demo}

export interface PropsDefine {
    /**
     * 全部 demo
     */
    demos?: Array<Demo>
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 当前选择 demo
     */
    selectedDemo?: Demo
}

export class State implements StateDefine {
    selectedDemo = null as Demo
}