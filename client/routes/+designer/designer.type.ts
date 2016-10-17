import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import Application from '../../../store/application'
import Event from '../../../store/event'
import Editor from '../../../store/editor'
import EditorAction from '../../../action/editor'

export interface PropsDefine extends RouteComponentProps<{id: string}, {}> {
    application?: Application
    event?: Event
    editor?: Editor
    editorAction?: EditorAction
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 获取上次编辑信息
     */
    value?: string

    /**
     * 资源和请求是否都加载完毕
     */
    isReady?: boolean
}

export class State implements StateDefine {
    value = null as string
    isReady = false
}