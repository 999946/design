import * as React from 'react'
import * as typings from './image.type'
import {TouchableOpacity, Image} from 'react-native'
import {TransmitTransparently} from 'nt-transmit-transparently'

@TransmitTransparently('fallbackSource', 'fallbackColor', 'pressToReload', 'fallbackAddon', 'fallbackHideImage')
export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 兜底图加载失败次数， 失败 3 次会取消一切补救操作
    private fallbackLoadCounter = 0

    componentWillMount() {
        this.setState({
            source: this.props.source
        })
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.setState({
            source: nextProps.source,
            loadImageSuccess: true
        })
    }

    handleLoadSuccess(event?: any) {
        this.fallbackLoadCounter = 0

        if (this.state.source === this.props.source) {
            this.setState({
                loadImageSuccess: true
            })
        }
    }

    handleLoadError() {
        this.props.onError()

        this.setState({
            loadImageSuccess: false
        })

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
        this.props.onPress()
        if (this.props.pressToReload && this.state.loadImageSuccess === false) {
            // 重新加载原图
            this.fallbackLoadCounter = 0
            this.setState({
                source: this.props.source
            })
            this.forceUpdate()
        }
    }

    render() {
        this.props.others.style = Object.assign({}, this.props.others.style, {
            backgroundColor: this.state.loadImageSuccess ? 'transparent' : this.props.fallbackColor
        })

        return (
            <TouchableOpacity activeOpacity={1}
                              onPress={this.handlePress.bind(this)}
                {...this.props.others}>

                {!(!this.state.loadImageSuccess && this.props.fallbackHideImage) &&
                <Image onError={this.handleLoadError.bind(this)}
                       onLoad={this.handleLoadSuccess.bind(this)}
                       source={this.state.source}
                    {...this.props.others}/>
                }

                {!this.state.loadImageSuccess &&
                this.props.fallbackAddon()
                }

            </TouchableOpacity>
        )
    }
}
                