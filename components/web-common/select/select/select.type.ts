import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {

}

export class PropsGaea {
    gaeaName = '下拉选择框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-select'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                