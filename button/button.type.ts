import * as React from 'react'
import {TouchableOpacityProperties} from 'react-native'

export interface PropsDefine extends TouchableOpacityProperties {
    /**
     * 按钮大小（高度）
     */
    size?: number

    /**
     * 字体大小
     */
    fontSize?: number

    /**
     * 样式
     */
    style?: React.ViewStyle

    /**
     * 文字样式
     */
    textStyle?: React.TextStyle

    /**
     * 类型
     */
        type?: ButtonType
}

export class Props implements PropsDefine {
    size = 24
    fontSize = 16
    style = {}
    textStyle = {}
    type = 'normal' as ButtonType
}

export interface StateDefine {

}

export class State implements StateDefine {

}

export type ButtonType = 'normal' | 'light'