import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import Application from '../store/application'

export interface PropsDefine extends RouteComponentProps<{}, {}> {
    application?: Application
}

export class Props implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}