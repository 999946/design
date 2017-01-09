import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'
import {DOMAttributes} from 'react'

export interface PropsDefine extends TransparentlyPropsPropsDefine, DOMAttributes {
    /**
     * 默认是否展开全部
     */
    defaultExpendAll?: boolean

    /**
     * 点击箭头才会展开
     */
    toggleByArrow?: boolean

    others?: any
}

export class PropsGaea {
    gaeaName = '折叠树'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-tree'
}

export class Props extends PropsGaea implements PropsDefine {
    defaultExpendAll = false
    toggleByArrow = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                