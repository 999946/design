import * as React from 'react'

export interface PropsDefine {
    others?: any
}

export class PropsGaea {
    gaeaName = '透传属性定义'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-transparently-props'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                