import * as React from 'react'
import Application from '../../../../store/application'
import Event from '../../../../store/event'
import EditorAction from '../../../../action/editor'
import Editor from '../../../../store/editor'

export interface PropsDefine {
    application?: Application
    event?: Event
    editorAction?: EditorAction
    editor?: Editor
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    /**
     * 是否显示模态框
     */
    show?: boolean

    /**
     * 创建应用类型
     */
    createType?: string

    /**
     * 创建表单名称
     */
    createName?: string

    /**
     * 创建表单描述
     */
    createIntro?: string

    /**
     * 创建应用权限等级
     */
    accessLevel?: string
}

export class State implements StateDefine {
    show = false
    createType = 'web'
    accessLevel = 'public'
}