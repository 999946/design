import * as React from 'react'
import Application from '../../../store/application'
import Event from '../../../store/event'

export interface PropsDefine {
    application?: Application
    event?: Event
}

export class Props implements PropsDefine {

}

export interface StateDefine {
    isReady?: boolean
    value?: any
}

export class State implements StateDefine {
    isReafy = false
    value = JSON.parse(`{"gaea-component-1474506608231-1":{"props":{"gaeaUniqueKey":"gaea-layout","display":"block","flexGrow":1,"flexDirection":"column","overflow":null,"overflowX":"hidden","overflowY":"auto"},"layoutChilds":["gaea-component-1474506620055-4","gaea-component-1474506620627-5","gaea-component-1474506621157-6"],"parentMapUniqueKey":null},"gaea-component-1474506620055-4":{"props":{"gaeaUniqueKey":"web-common-button"},"parentMapUniqueKey":"gaea-component-1474506608231-1"},"gaea-component-1474506620627-5":{"props":{"gaeaUniqueKey":"web-common-button"},"parentMapUniqueKey":"gaea-component-1474506608231-1"},"gaea-component-1474506621157-6":{"props":{"gaeaUniqueKey":"web-common-button"},"parentMapUniqueKey":"gaea-component-1474506608231-1"}}`)
}