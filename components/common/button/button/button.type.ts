import * as React from 'react'
import {TouchableOpacityProperties} from 'react-native'
import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'

export interface PropsDefine extends TouchableOpacityProperties, TransparentlyNativePropsPropsDefine {
    /**
     * 样式
     */
    style?: React.ViewStyle

    /**
     * 高亮样式
     */
    activeStyle?: React.ViewStyle

    /**
     * 文字样式
     */
    textStyle?: React.TextStyle

    /**
     * 文字高亮样式
     */
    activeTextStyle?: React.TextStyle
}

export class Props implements PropsDefine {
    activeOpacity = 0.7
    activeStyle = {}
    textStyle = {}
    activeTextStyle = {}
}

export interface StateDefine {
    /**
     * 是否激活
     */
    active?: boolean
}

export class State implements StateDefine {
    active = false
}
                