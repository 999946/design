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
     * 全部 demo
     */
    demos?: Array<Demo>

    /**
     * 当前组件的 package.json
     */
    packageJson?: Components.PackageJson

    /**
     * 当前组件的信息
     */
    componentInfo?: Components.ComponentConfig

    /**
     * 当前所在 演示/文档/依赖 状态  demo / document / dependence
     */
    statu?: Statu
}

export class State implements StateDefine {
    demos = [] as Array<Demo>
    packageJson = null as Components.PackageJson
    componentInfo = null as Components.ComponentConfig
    statu = Statu.DEMO
}

export interface Demo {
    Class: Components.DemoProps<any>
    code: string
}