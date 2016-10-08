import * as React from 'react'
import * as typings from './text-input.type'
import {TextInput} from 'react-native'

export default class TextInputComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <TextInput style={this.props.style}
                       value={this.props.text}/>
        )
    }
}