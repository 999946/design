import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {

}

export class PropsGaea {

}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {
    others?: any
}

export class State implements StateDefine {
    others = {}
}
