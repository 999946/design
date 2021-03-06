import * as React from 'react'
import * as typings from './design-space.type'
import {observer, inject} from 'mobx-react'

import DesignerCard from '../../components/designer-card/designer-card.component'

import Navbar from './navbar/navbar.component'

import './design-space.scss'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class DesignSpace extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
        this.props.editorAction.getSelfEditorList()
    }

    render() {
        const EditContainerList = this.props.editor.myEditList.map((editor, index)=> {
            return (
                <DesignerCard key={index}
                              info={editor}/>
            )
        })

        return (
            <div className="_namespace">
                <Navbar/>
                <div className="edit-list-container">
                    {EditContainerList}
                </div>
            </div>
        )
    }
}