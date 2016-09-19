import * as React from 'react'

export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    /**
     * 值
     */
    value?: any
    /**
     * 默认值
     */
    defaultValue?: any
    /**
     * 是否垂直显示
     */
    vertical?: boolean
    /**
     * 有修改的回调
     */
    onChange?: (value: any) => void
    /**
     * 类型
     */
        type?: string
    /**
     * 透传组件
     */
    others?: any
}

export class PropsGaea {
    gaeaName = '单选框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-radio-group'
}

export class Props extends PropsGaea implements PropsDefine {
    value = null as any
    vertical = false
    onChange = () => {
    }
}

export interface StateDefine {
    /**
     * 值
     */
    value?: any
}

export class State implements StateDefine {

}
                