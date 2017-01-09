import * as React from 'react'
import * as typings from './line.type'
import {View} from 'react-native'
import {TransmitTransparently} from 'nt-transmit-transparently'

@TransmitTransparently('style')
export default class Line extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const borderStyle = {
            borderStyle: this.props.lineType,
        }
        let lineStyle: React.ViewStyle

        if (this.props.vertical) {
            lineStyle = [borderStyle, {
                borderLeftWidth: this.props.width,
                borderLeftColor: this.props.color,
            }]
        } else {
            lineStyle = [borderStyle, {
                borderBottomWidth: this.props.width,
                borderBottomColor: this.props.color,
            }]
        }

        return <View {...this.props.others} style={[lineStyle, this.props.style]}/>
    }
}
                