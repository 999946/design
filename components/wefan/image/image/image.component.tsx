import * as React from 'react'
import * as typings from './image.type'
import Gif from '../../../common/gif/index'
import {TransmitTransparently} from '../../../common/transmit-transparently/index'
import {Image} from 'react-native'

@TransmitTransparently('fallbackSource', 'fallbackColor', 'fallbackAddon', 'pressToReload', 'firstSource', 'onPress')
export default class WefanImage extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    fallbackAddon() {
        return (
            <Image style={{width:120,height:80}}
                   source={require('../resources/empty.png')}/>
        )
    }

    render() {
        this.props.others.style = Object.assign({}, this.props.others.style, {
            justifyContent: 'center',
            alignItems: 'center'
        })

        return (
            <Gif firstSource={this.props.firstSource}
                 source={this.props.source}
                 fallbackColor="#eee"
                 fallbackHideImage={true}
                 fallbackAddon={this.fallbackAddon.bind(this)}
                 pressToReload={true}
                {...this.props.others}/>
        )
    }
}