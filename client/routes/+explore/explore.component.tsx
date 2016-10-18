import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './explore.type'
import {observer, inject} from 'mobx-react'

import DesignerCard from '../../components/designer-card/designer-card.component'

import './explore.scss'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class Explore extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
        this.props.editorAction.getExploreEditorList()
    }

    render() {
        const EditContainerList = this.props.editor.exploreEditList.map((editor, index)=> {
            return (
                <DesignerCard key={index}
                              isExplore={true}
                              info={editor}/>
            )
        })

        return (
            <div className="_namespace">
                <div className="edit-list-container">
                    {EditContainerList}
                </div>
            </div>
        )
    }
}