import * as React from 'react'
import {RouteComponentProps} from 'react-router'

export interface CategoryParams {
    category: string
    component: string
}

export interface PropsDefine extends RouteComponentProps<CategoryParams, {}> {

}


export class Props implements PropsDefine {

}

export interface StateDefine {
    childs?: Array<{
        Class: Components.DemoProps<any>
        code: string
    }>
}

export class State implements StateDefine {
    childs = [] as Array<{
        Class: Components.DemoProps<any>
        code: string
    }>
}