import * as React from 'react'

export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    /**
     * 对应Tabs的defaultActiveKey
     */
    activeKey?: string

    /**
     * 标签名
     */
    tab?: string

    /**
     * 标签名,可以渲染任意 React 元素
     */
    tabRender?: (isActive?: boolean)=>React.ReactElement<any>

    /**
     * 是否处于显示状态
     */
    active?: boolean

    others?: any
}

export class PropsGaea {
    gaeaName = '标签页'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-tabs'
}

export class Props extends PropsGaea implements PropsDefine {
    activeKey = ''
    tab = ''
    active = false
    tabRender = (): any=> {
        return null
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                