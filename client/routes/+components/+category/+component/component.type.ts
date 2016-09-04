import * as React from 'react'
import {RouteComponentProps} from 'react-router'

export enum Statu {
    DEMO,
    DOCUMENT,
    DEPENDENCE
}

export interface CategoryParams {
    category: string
    component: string
}

export interface PropsDefine extends RouteComponentProps<CategoryParams, {}> {

}


export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 当前组件的完整信息
     */
    componentFullInfo?: RouterComponentsModel.ComponentFullInfo

    /**
     * 当前组件的信息, 从根目录 components 里读的
     */
    componentInfo?: Components.ComponentConfig

    /**
     * 所属分类信息
     */
    categoryInfo?: Components.Category

    /**
     * 当前所在 演示/文档/依赖 状态  demo / document / dependence
     */
    statu?: Statu
}

export class State implements StateDefine {
    componentFullInfo = null as RouterComponentsModel.ComponentFullInfo
    componentInfo = null as Components.ComponentConfig
    categoryInfo = null as Components.Category
    statu = Statu.DEMO
}