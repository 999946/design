import * as React from 'react'

export interface PropsDefine extends React.HTMLAttributes {
    /**
     * 是垂直显示
     */
    vertical?: boolean

    others?: any
}

export class PropsGaea {
    gaeaName = '按钮组'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'web-common-button-group'
}

export class Props extends PropsGaea implements PropsDefine {
    vertical = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}