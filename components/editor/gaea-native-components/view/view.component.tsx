import * as React from 'react'
import * as typings from './view.type'
import {View, TouchableWithoutFeedback, ScrollView} from 'react-native'

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

        if (!this.props.gaeaPreview) {
            // 编辑模式只给 view
            return (
                <View style={this.props.style}>{this.props.children}</View>
            )
        }

        if (this.props.canScroll && !hasClick) {
            // 能滚动不能点击
            delete this.props.style.justifyContent
            delete this.props.style.alignItems
            return (
                <ScrollView style={this.props.style}>{this.props.children}</ScrollView>
            )
        } else if (!this.props.canScroll && hasClick) {
            // 不能滚动能点击
            return (
                <TouchableWithoutFeedback onPress={this.props.onClick.bind(this)}>
                    <View>
                        {this.props.children}
                    </View>
                </TouchableWithoutFeedback>
            )
        } else if (this.props.canScroll && hasClick) {
            // 能滚动能点击
            return (
                <TouchableWithoutFeedback onPress={this.props.onClick.bind(this)}>
                    <ScrollView>
                        {this.props.children}
                    </ScrollView>
                </TouchableWithoutFeedback>
            )
        }

        return (
            <View style={this.props.style}>{this.props.children}</View>
        )
    }
}