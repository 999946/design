import * as React from 'react'
import * as typings from './switch.type'
import {Switch} from 'react-native'

export default class SwitchComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Switch style={this.props.style}
                    value={this.props.checked}/>
        )
    }
}