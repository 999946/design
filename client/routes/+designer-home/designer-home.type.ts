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
    show?: boolean
    videoUrl?: string
}

export class State implements StateDefine {
    show = false
}