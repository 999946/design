import * as React from 'react'
import * as typings from './image.type'
import Gif from '../../../common/gif/index'

export default class Image extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Gif firstSource={this.props.firstSource}
                 source={this.props.source}
                 style={this.props.style}/>
        )
    }
}
                