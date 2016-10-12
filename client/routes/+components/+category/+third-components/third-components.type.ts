import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import Application from '../../../../../store/application'
import Event from '../../../../../store/event'

export interface CategoryParams {
    category: string
    component: string
}

export interface PropsDefine extends RouteComponentProps<CategoryParams, {}> {
    application?: Application
    event?: Event
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    componentFullInfo?: RouterComponentsModel.ThirdComponentFullInfo
}

export class State implements StateDefine {

}