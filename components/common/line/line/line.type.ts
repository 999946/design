import * as React from 'react'
import {ViewProperties} from 'react-native'
import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'

export interface PropsDefine extends ViewProperties, TransparentlyNativePropsPropsDefine {
    /**
     * 宽度
     */
    width?: number

    /**
     * 线条颜色
     */
    color?: string

    /**
     * 线条样式
     */
    lineType?: LineType

    /**
     * 是否垂直
     */
    vertical?: boolean

    /**
     * 样式
     */
    style?: React.ViewStyle
}

export class Props implements PropsDefine {
    width = 0.5
    color = '#E3E4E6'
    lineType = 'solid' as LineType
    vertical = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}

export type LineType = 'solid' | 'dotted' | 'dashed'