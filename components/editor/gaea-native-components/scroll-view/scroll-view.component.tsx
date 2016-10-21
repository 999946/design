import * as React from 'react'
import * as typings from './scroll-view.type'
import {ScrollView} from 'react-native'

export default class ScrollViewComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        delete this.props.style.justifyContent
        delete this.props.style.alignItems

        return (
            <ScrollView horizontal={this.props.horizontal}
                        onScroll={this.props.onScroll}
                        scrollEventThrottle={this.props.scrollEventThrottle}
                        style={this.props.style}>{this.props.children}</ScrollView>
        )
    }
}