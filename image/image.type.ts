import * as React from 'react'
import {ImageProperties, LayoutChangeEvent, ImageStyle} from 'react-native'

export interface PropsDefine extends ImageProperties {
    /**
     * 加载失败时的图片地址
     */
    fallbackSource?: {uri: string} | string

    /**
     * 加载失败时的背景颜色
     */
    fallbackColor?: string

    /**
     * 当属性为真的时候， 点击图片会重新尝试拉取原图片
     */
    pressToReload?: boolean

    /**
     * 当点击图片时触发
     */
    onPress?: ()=>void

    /**
     * 当图片加载非预期（包括显示了兜底图）时，可以往图片容器里加一些元素
     */
    fallbackAddon?: ()=>React.ReactElement<any>

    /**
     * 加载失败是否隐藏图片
     */
    fallbackHideImage?: boolean

    /**
     * 加载图片失败时的回调
     */
    onError?: ()=>void

    others?: any
}

export class PropsGaea {
    gaeaName = '图片'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-image'
}

export class Props extends PropsGaea implements PropsDefine {
    source = ''
    pressToReload = false
    onPress = ()=> {
    }
    fallbackAddon = ()=> {
        return null as any
    }
    onError = ()=> {
    }
    fallbackHideImage = false
}

export interface StateDefine {
    source?: {uri: string} | string

    /**
     * 是否成功加载了预期图片
     */
    loadImageSuccess?: boolean
}

export class State implements StateDefine {
    source = ''
    loadImageSuccess = true
}
                