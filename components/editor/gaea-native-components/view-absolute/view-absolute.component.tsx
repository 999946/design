import * as React from 'react'
import * as typings from './view-absolute.type'
import CustomView from '../view/view.component'

export default class ViewComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <CustomView {...this.props}>{this.props.children}</CustomView>
        )
    }
}