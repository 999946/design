import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {

}

export class PropsGaea {
    gaeaName = '盖亚-原生组件'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-editor-gaea-native-components'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                