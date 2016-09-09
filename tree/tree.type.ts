import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {

}

export class PropsGaea {
    gaeaName = '折叠树'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-tree'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                