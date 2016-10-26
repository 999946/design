import {TransparentlyNativePropsPropsDefine} from '../../../common/transparently-native-props/index'
import {gaeaHelper} from '../../gaea-helper/index'
import * as CustomView from '../view/view.type'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends CustomView.PropsDefine {

}

export class PropsGaea extends CustomView.PropsGaea {
    gaeaName = '布局-绝对定位'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout-absolute'
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
            backgroundColor: 'transparent',
            position: 'absolute',
            width: 150,
            height: 150,
            zIndex: 1
        }
    )
}

export interface StateDefine {

}

export class State implements StateDefine {

}