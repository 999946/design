import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'
import {gaeaHelper} from 'gaea-helper'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
}

export class PropsGaea {
    gaeaName = 'ListView'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-list-view'
    gaeaEdit = [
        'ListView',
        {
            field: 'source',
            label: '图片地址',
            editor: 'text',
            editable: true
        },
        '布局',
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
    ]
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign(
        {},
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight
    )
}

export interface StateDefine {

}

export class State implements StateDefine {

}