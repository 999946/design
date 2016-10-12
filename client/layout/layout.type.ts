import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import ApplicationAction from '../../action/application'
import Application from '../../store/application'
import Event from '../../store/event'
import User from '../../store/user'
import UserAction from '../../action/user'

export interface PropsDefine extends RouteComponentProps<{}, {}> {
    applicationAction?: ApplicationAction
    application?: Application
    event?: Event
    user?: User
    userAction?: UserAction
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