import * as React from 'react'
import * as typings from './button.type'
import {TouchableOpacity, Text} from 'react-native'
import {TransmitTransparently} from '../../transmit-transparently/index'
import {autoBindMethod} from '../../auto-bind/index'

@TransmitTransparently()
export default class Button extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    @autoBindMethod handlePressIn() {
        this.setState({active: true})
        // 将方法传给父级
        this.props.onPressIn && this.props.onPressIn()
    }

    @autoBindMethod handlePressOut() {
        this.setState({active: false})
        // 将方法传给父级
        this.props.onPressOut && this.props.onPressOut()
    }

    getChildren() {
        // 如果直接传了字符串, 包一层 Text, 因为样式无法继承,透传样式
        if (typeof this.props.children === 'string') {
            return (
                <Text style={[this.props.textStyle, this.state.active && this.props.activeTextStyle]}>
                    {this.props.children}
                </Text>
            )
        }

        return this.props.children
    }

    render() {
        return (
            <TouchableOpacity
                {...this.props.others as React.TouchableOpacityStatic}
                style={[this.props.style, this.state.active && this.props.activeStyle]}
                activeOpacity={this.props.activeOpacity}
                onPressIn={this.handlePressIn}
                onPressOut={this.handlePressOut}>
                {this.getChildren()}
            </TouchableOpacity>
        )
    }
}
