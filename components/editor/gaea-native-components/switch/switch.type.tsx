import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'
import {gaeaHelper} from 'gaea-helper'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
    checked?: boolean
}

export class PropsGaea {
    gaeaName = '开关'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-switch'
    gaeaEdit = [
        '开关',
        {
            field: 'checked',
            label: '是否选中',
            editor: 'switch',
            editable: true
        },
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
        gaeaHelper.overflow
    )
    checked = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}