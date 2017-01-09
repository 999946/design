import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'
import {gaeaHelper} from 'gaea-helper'
import * as ReactNaitve from 'react-native'

const instances = [{
    name: 'icnHomepageZfS'
}, {
    name: 'iconBackNavMineBlack'
}, {
    name: 'iconMoreNavN'
}, {
    name: 'iconCloseNav'
}, {
    name: 'icnHomeTopNewb'
}, {
    name: 'icnMineSettingB'
}, {
    name: 'iconFindSearch'
}, {
    name: 'minus'
}]

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle

    /**
     * 图标名
     */
    name?: string
}

export class PropsGaea {
    gaeaName = '图标'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'wefan-icon'
    gaeaEdit = [
        '图标',
        {
            field: null as string,
            label: '',
            editor: 'instance',
            editable: true,
            instance: instances
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
    name = 'icnHomepageZfS'
}

export interface StateDefine {

}

export class State implements StateDefine {

}