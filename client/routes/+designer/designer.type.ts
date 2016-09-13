import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import Application from '../../../store/application'

export interface PropsDefine extends RouteComponentProps<{}, {}> {
    application?: Application
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 获取上次编辑信息
     */
    value?: string
}

export class State implements StateDefine {
    value = null as string
}