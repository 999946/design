import * as React from 'react'

export interface PropsDefine extends React.HTMLAttributes {
    /**
     * 是垂直显示
     */
    vertical?: boolean

    others?: any
}

export class Props implements PropsDefine {
    vertical = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}