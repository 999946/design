import * as React from 'react'

export interface PropsDefine {
    /**
     * 类型
     */
        type?: string
    /**
     * 内容
     */
    content?: string
}

export class PropsGaea {
    gaeaName = '全局消息'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-message'
}

export class Props extends PropsGaea implements PropsDefine {
    type: 'info'
}

export interface StateDefine {
    /**
     * 状态
     */
    status?: string
}

export class State implements StateDefine {
    status = null as string
}
                