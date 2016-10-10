import {TransparentlyNativePropsPropsDefine} from '../../../common/transparently-native-props/index'
import {gaeaHelper} from '../../../editor/gaea-helper/index'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
    source?: string
}

export class PropsGaea {
    gaeaName = '图标'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'wefan-icon'
    gaeaEdit = [
        '图片',
        {
            field: 'source',
            label: '图片地址',
            editor: 'text',
            editable: true
        },
        '布局',
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
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
        {
            width: 40,
            height: 40
        }
    )
    source = ''
}

export interface StateDefine {

}

export class State implements StateDefine {

}