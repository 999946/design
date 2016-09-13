import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import Application from '../../store/application'

export interface PropsDefine extends RouteComponentProps<{}, {}> {
    application?: Application
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 当前 loading 的状态
     */
    loadingStatus?: LoadingStatus
}

export class State implements StateDefine {
    loadingStatus = 'start' as LoadingStatus
}

export type LoadingStatus =  'start'|'end'