import * as React from 'react'
import * as ReactNative from 'react-native'
import {ImagePropsDefine} from '../../image/index'

export interface PropsDefine extends ImagePropsDefine {
    /**
     * 首帧 gif 图片地址
     */
    firstSource?: {uri: string} | string

    others?: any
}

export class PropsGaea {
    gaeaName = 'GIF'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-gif'
}

export class Props extends PropsGaea implements PropsDefine {
    source = ''
    onPress = ()=> {
    }
}

export interface StateDefine {
    /**
     * 当前资源地址, 播放 gif 时会换掉
     */
    source?: {uri: string} | string
}

export class State implements StateDefine {
    source = ''
}
                