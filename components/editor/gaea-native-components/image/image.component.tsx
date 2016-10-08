import * as React from 'react'
import * as typings from './image.type'
import {Image} from 'react-native'

export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Image style={this.props.style} source={this.props.source}/>
        )
    }
}