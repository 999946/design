import * as React from 'react'
import {TreePropsDefine} from '../../tree/index'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 期望展示的对象
     */
    json: Object

    /**
     * 是否有默认root级
     */
    root?: boolean
}

export class PropsGaea {
    gaeaName = 'json 树'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-json-tree'
}

export class Props extends PropsGaea implements PropsDefine {
    json = {}
    root = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                