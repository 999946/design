import {TransparentlyNativePropsPropsDefine} from '../../../common/transparently-native-props/index'
import {gaeaHelper} from '../../gaea-helper/index'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle

    onClick?: ()=>void
    gaeaEvent?: FitGaea.GaeaEvent
    gaeaEventData?: Array<FitGaea.EventData>

    /**
     * 是否在预览状态
     */
    gaeaPreview?: boolean

    /**
     * 是否可以滚动
     */
    canScroll?: boolean
}

export class PropsGaea {
    gaeaName = '布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout'
    gaeaEdit = [
        '特殊',
        {
            field: 'canScroll',
            label: '子元素能否滚动',
            editor: 'switch',
            editable: true
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
        types: [{
            name: '点击',
            type: 'onClick',
            selfCallback: true
        }],
        events: [{
            name: '跳转网址',
            event: 'jumpUrl'
        }, {
            name: '回退',
            event: 'call',
            call: {
                functionName: 'back'
            }
        }]
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
            backgroundColor: 'white'
        }
    )

    onClick = ()=> {

    }

    canScroll = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}