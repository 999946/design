import * as React from 'react'
import * as typings from './gif.type'
import Image from '../../image/index'
import {View} from 'react-native'

export default class Gif extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.setState({
            source: this.props.firstSource || this.props.source
        })
    }

    handlePress() {
        this.props.onPress && this.props.onPress()

        this.setState({
            source: this.props.source
        })
    }

    render() {
        return (
            <View>
                <Image source={this.state.source}
                       style={this.props.style}
                       onPress={this.handlePress.bind(this)}/>
            </View>
        )
    }
}
                