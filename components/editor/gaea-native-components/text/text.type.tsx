import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'
import {gaeaHelper} from 'gaea-helper'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
    text?: string
}

export class PropsGaea {
    gaeaName = '文字'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-text'
    gaeaEdit = [
        '文字',
        {
            field: 'text',
            label: '内容',
            editor: 'text',
            editable: true
        },
        '排版',
        gaeaHelper.fontEditor,
        '布局',
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
        gaeaHelper.overflowEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign(
        {},
        gaeaHelper.layoutNative,
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight,
        gaeaHelper.overflow,
        gaeaHelper.fontNative
    )
    text = '文字'
}

export interface StateDefine {

}

export class State implements StateDefine {

}