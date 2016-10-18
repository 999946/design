import * as React from 'react'
import Application from '../../../store/application'
import Event from '../../../store/event'
import EditorAction from '../../../action/editor'
import Editor from '../../../store/editor'
import User from '../../../store/user'

export interface PropsDefine {
    application?: Application
    event?: Event
    editorAction?: EditorAction
    editor?: Editor
    user?: User

    info?: Http.EditorResponse

    /**
     * 是否是浏览模式
     */
    isExplore?: boolean
}

export class Props implements PropsDefine {
    isExplore = false
}

export interface StateDefine {
    /**
     * 是否显示删除应用的模态框
     */
    showDeleteModal?: boolean

    /**
     * 准备删除的应用信息
     */
    prepareDeleteInfo?: Http.EditorResponse
}

export class State implements StateDefine {
    prepareDeleteInfo = {} as Http.EditorResponse
}