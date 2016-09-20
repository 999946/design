import * as React from 'react'

export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    /**
     * 设置默认打开哪个tab,与tabPanel的key对应,只有初始化有效
     */
    defaultActiveKey?: string|number

    /**
     * 同defaultActiveKey,但是可以让其受外部控制
     */
    activeKey?: string|number

    /**
     * 切换tab时的回调
     */
    onChange?: (key?: string|number)=> void

    /**
     * 风格
     */
        type?: Type

    others?: any
}

export class PropsGaea {
    gaeaName = '标签页'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-tabs'
}

export class Props extends PropsGaea implements PropsDefine {
    defaultActiveKey = null as any
    activeKey = null as any
    onChange = ()=> {
    }
}

export type Type = 'retro'

export interface StateDefine {
    activeKey?: string|number
    moveBarStyle?: any
    isForward?: boolean
}

export class State implements StateDefine {
    moveBarStyle = {}
    isForward = false
}
                