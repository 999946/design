import * as React from 'react'
import * as typings from './text.type'
import {Text} from 'react-native'

export default class TextComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Text style={this.props.style}>{this.props.text}</Text>
        )
    }
}