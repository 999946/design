import * as React from 'react'
import * as typings from './margin-padding-editor.type'

export default class MarginPaddingEditor extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div>
                内/外边距编辑器
            </div>
        )
    }
}
                