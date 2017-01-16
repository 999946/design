import * as React from 'react'
import * as typings from './list-view.type'

import ListViewEditor from './list-view-editor/list-view-editor.component'
import ListViewPreview from './list-view-preview/list-view-preview.component'

export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        if (!this.props.gaeaPreview) {
            // 编辑模式只给 editor
            return (
                <ListViewEditor {...this.props}/>
            )
        }

        return (
            <ListViewPreview {...this.props}/>
        )
    }
}