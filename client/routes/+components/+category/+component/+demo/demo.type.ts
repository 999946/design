import * as React from 'react'
import * as typings from '../full-component-info/full-component-info.type'

export interface PropsDefine extends typings.PropsDefine {

}


export class Props extends typings.Props implements PropsDefine {

}

export interface StateDefine extends typings.StateDefine {
    /**
     * 当前选择 demo
     */
    selectedDemo?: RouterComponentsModel.Demo
}

export class State extends typings.State implements StateDefine {
    selectedDemo = null as RouterComponentsModel.Demo
}