import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {

}

export class PropsGaea {
    gaeaName = 'GIF'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-gif'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                