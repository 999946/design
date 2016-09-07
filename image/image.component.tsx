import * as React from 'react'
import * as typings from './image.type'
import {TouchableOpacity, Image} from 'react-native'

export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 兜底图加载失败次数， 失败 3 次会取消一切补救操作
    private fallbackLoadCounter = 0

    // 是否成功加载了预期图片
    private loadImageSuccess = false

    componentWillMount() {
        this.setState({
            source: this.props.source
        })
    }

    handleLoadSuccess() {
        this.fallbackLoadCounter = 0

        if (this.state.source === this.props.source) {
            this.loadImageSuccess = true
        }
    }

    handleLoadError() {
        this.loadImageSuccess = false
        if (this.props.fallbackSource) {
            if (this.fallbackLoadCounter < 3) {
                this.fallbackLoadCounter++
                // 如果设置了兜底图，现在展示它
                this.setState({
                    source: this.props.fallbackSource
                })
            }
        }
    }

    handlePress() {
        this.props.onPress && this.props.onPress()
        if (this.props.pressToReload && this.loadImageSuccess === false) {
            // 重新加载原图
            this.fallbackLoadCounter = 0
            this.setState({
                source: this.props.source
            })
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1}
                              onPress={this.handlePress.bind(this)}>
                <Image style={this.props.style}
                       onError={this.handleLoadError.bind(this)}
                       onLoad={this.handleLoadSuccess.bind(this)}
                       source={this.state.source}/>
            </TouchableOpacity>
        )
    }
}
                