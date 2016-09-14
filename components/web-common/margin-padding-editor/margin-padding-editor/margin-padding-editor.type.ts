import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {

}

export class PropsGaea {
    gaeaName = '内/外边距编辑器'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-margin-padding-editor'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                