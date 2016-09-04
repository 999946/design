import * as React from 'react'

export interface PropsDefine {
    /**
     * 全部 demo
     */
    demos?: Array<RouterComponentsModel.Demo>

    /**
     * 所属分类信息
     */
    categoryInfo?: Components.Category

    /**
     * 组件信息
     */
    componentInfo?: Components.ComponentConfig
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 当前选择 demo
     */
    selectedDemo?: RouterComponentsModel.Demo
}

export class State implements StateDefine {
    selectedDemo = null as RouterComponentsModel.Demo
}