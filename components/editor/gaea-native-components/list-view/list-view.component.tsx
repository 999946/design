import * as React from 'react'
import * as typings from './list-view.type'
import {View} from 'react-native'

export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <View style={this.props.style}>{this.props.children}</View>
        )
    }
}