import * as React from 'react'
import * as typings from './gif.type'
import Image from '../../image/index'
import {View} from 'react-native'
import {TransmitTransparently} from '../../transmit-transparently/index'

@TransmitTransparently('fallbackSource', 'fallbackColor', 'fallbackAddon', 'pressToReload', 'firstSource', 'fallbackHideImage', 'onPress')
export default class Gif extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 图片是否加载成功
    loadSuccess = false

    componentWillMount() {
        this.setState({
            source: this.props.firstSource || this.props.source
        })
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.setState({
            source: nextProps.source
        })
    }

    handlePress() {
        this.props.onPress()

        if (!this.loadSuccess) {
            // 如果读取失败， 继续读第一张图
            this.setState({
                source: this.props.firstSource || this.props.source
            })
        } else {
            // 否则直接读目标图
            this.setState({
                source: this.props.source
            })
        }
    }

    handleLoadError() {
        this.loadSuccess = false
    }

    handleLoadSuccess() {
        this.loadSuccess = true
    }

    render() {
        return (
            <Image source={this.state.source}
                   onError={this.handleLoadError.bind(this)}
                   onLoad={this.handleLoadSuccess.bind(this)}
                   onPress={this.handlePress.bind(this)}
                {...this.props.others}/>
        )
    }
}
                