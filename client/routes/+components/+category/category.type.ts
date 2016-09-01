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

}

export class State implements StateDefine {

}