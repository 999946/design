import * as React from 'react'
import * as typings from './icon.type'
import {Image} from 'react-native'

export default class GaeaComponents extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Image style={this.props.style} source={this.props.source}/>
        )
    }
}
                