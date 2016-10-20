import * as React from 'react'
import * as typings from './view.type'
import {View, TouchableWithoutFeedback} from 'react-native'

export default class ViewComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        // 如果有点击事件，就换成 Touchable
        let hasClick = false
        if (this.props.gaeaEventData) {
            this.props.gaeaEventData.forEach(data=> {
                if (data.typeIndex > -1 && this.props.gaeaEvent.types[data.typeIndex].selfCallback && data.type === 'onClick') {
                    hasClick = true
                }
            })
        }

        if (hasClick) {
            return (
                <TouchableWithoutFeedback onPress={this.props.onClick.bind(this)}>
                    <View style={this.props.style}>
                        {this.props.children}
                    </View>
                </TouchableWithoutFeedback>
            )
        } else {
            return (
                <View style={this.props.style}>{this.props.children}</View>
            )
        }
    }
}