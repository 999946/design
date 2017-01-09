import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'
import {gaeaHelper} from 'gaea-helper'
import {SwiperPropsDefine} from 'nt-swiper'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends SwiperPropsDefine, TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
}

export class PropsGaea {
    gaeaName = '轮播'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-swiper'
    canDragIn = true
    gaeaEdit = [
        '轮播',
        {
            label: '最大滑动距离（1-100）',
            field: 'maxDistance',
            editor: 'number',
            type: 'number'
        },
        {
            label: '滑动阈值（1-100）',
            field: 'threshold',
            editor: 'number',
            type: 'number'
        },
        {
            label: '速度阈值',
            field: 'thresholdSpeed',
            editor: 'number',
            type: 'number'
        },
        '布局',
        gaeaHelper.layoutEditor,
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
        gaeaHelper.widthHeight
    )

    maxDistance = 90
    threshold = 45
    thresholdSpeed = 1
}

export interface StateDefine {

}

export class State implements StateDefine {

}