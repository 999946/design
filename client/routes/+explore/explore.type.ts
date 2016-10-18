import * as React from 'react'
import Application from '../../../store/application'
import Event from '../../../store/event'
import EditorAction from '../../../action/editor'
import Editor from '../../../store/editor'

export interface PropsDefine {
    application?: Application
    event?: Event
    editorAction?: EditorAction
    editor?: Editor
}

export class Props implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}