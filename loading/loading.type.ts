import * as React from 'react'
import {HTMLAttributes} from 'react'

export interface PropsDefine extends HTMLAttributes {
    /**
     * 大小
     */
    size?: number

    others?: any
}

export class PropsGaea {
    gaeaName = '进度条'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-loading'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                