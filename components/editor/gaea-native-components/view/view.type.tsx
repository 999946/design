import { TransparentlyNativePropsPropsDefine } from '../../../common/transparently-native-props/index'
import { gaeaHelper } from '../../gaea-helper/index'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle

    onClick?: () => void
    gaeaEvent?: FitGaea.GaeaEvent
    gaeaEventData?: Array<FitGaea.EventData>

    /**
     * 是否在预览状态
     */
    gaeaPreview?: boolean
}

export class PropsGaea {
    gaeaName = '布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout'
    canDragIn = true
    gaeaEdit = [
        '布局',
        gaeaHelper.layoutEditor,
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
        gaeaHelper.overflowEditor,
        '定位',
        gaeaHelper.positionEditor,
        '背景',
        gaeaHelper.backgroundEditor,
        '边框',
        gaeaHelper.borderEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
    gaeaEvent = {
        triggers: [{
            name: '点击',
            type: 'onClick',
            selfCallback: true
        }],
        effects: [{
            name: '跳转网址',
            type: 'jumpUrl'
        }, {
            name: '回退',
            type: 'call',
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
        gaeaHelper.position,
        {
            backgroundColor: 'transparent'
        }
    )

    onClick = () => {

    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}