import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {
    /**
     * gif 图片地址
     */
    source: {uri: string} | string

    /**
     * 首帧 gif 图片地址
     */
    firstSource?: {uri: string} | string

    /**
     * 加载失败时的图片地址
     */
    fallbackSource?: {uri: string} | string

    /**
     * 当属性为真的时候， 点击图片会重新尝试拉取原图片
     */
    pressToReload?: boolean

    /**
     * 当点击图片时触发
     */
    onPress?: ()=>void

    /**
     * onLayout function
     *
     * Invoked on mount and layout changes with
     *
     * {nativeEvent: { layout: {x, y, width, height}}}.
     */
    onLayout?: (event: ReactNative.LayoutChangeEvent) => void

    /**
     * Invoked when load completes successfully
     */
    onLoad?: () => void

    /**
     * Invoked when load either succeeds or fails
     */
    onLoadEnd?: () => void

    /**
     * Invoked on load start
     */
    onLoadStart?: () => void


    /**
     * Determines how to resize the image when the frame
     * doesn't match the raw image dimensions.
     *
     * enum('cover', 'contain', 'stretch')
     */
    resizeMode?: "cover" | "contain" | "stretch"

    /**
     * Style
     */
    style?: ReactNative.ImageStyle

    /**
     * A unique identifier for this element to be used
     * in UI Automation testing scripts.
     */
    testID?: string
}

export class PropsGaea {
    gaeaName = '图片'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-wefan-image'
}

export class Props extends PropsGaea implements PropsDefine {
    source = ''
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                