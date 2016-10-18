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
}

export class Props implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}