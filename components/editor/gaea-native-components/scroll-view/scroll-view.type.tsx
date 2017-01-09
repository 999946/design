import {gaeaHelper} from 'gaea-helper'
import * as ReactNaitve from 'react-native'
import {ScrollViewProperties} from 'react-native'

export interface PropsDefine extends ScrollViewProperties {
    gaeaEvent?: FitGaea.GaeaEvent
    gaeaEventData?: Array<FitGaea.EventData>
}

export class PropsGaea {
    gaeaName = '滚动布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-scroll-layout'
    canDragIn = true
    gaeaEdit = [
        '滚动布局',
        {
            field: 'horizontal',
            label: '是否水平滚动',
            editor: 'switch'
        },
        {
            field: 'scrollEventThrottle',
            label: '滚动触发最小间隔（毫秒）',
            editor: 'number',
            type: 'number'
        },
        '布局',
        gaeaHelper.layoutEditor,
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
        gaeaHelper.overflowEditor,
        '背景',
        gaeaHelper.backgroundEditor,
        '边框',
        gaeaHelper.borderEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
    gaeaEvent = {
        triggers: [{
            name: '滚动时',
            type: 'onScroll',
            selfCallback: true
        }],
        effects: [] as any
    }
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign(
        {},
        gaeaHelper.layoutNative,
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight,
        gaeaHelper.overflowNative,
        gaeaHelper.backgroundNative,
        gaeaHelper.borderNative,
        {
            backgroundColor: 'transparent'
        }
    )

    horizontal = false
    scrollEventThrottle = 100
    onScroll = ()=> {
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}