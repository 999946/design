import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine{
    /**
     * 容器对象
     */
    selector?: string
}

export class Props implements PropsDefine {
    selector = 'body'
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                