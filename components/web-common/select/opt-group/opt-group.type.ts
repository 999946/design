import * as React from 'react'
import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 分组的标签名
     */
    label: string

    /**
     * 不对子元素透传配置,变量配置时开启
     */
    ignoreChildren?: boolean

    /**
     * 点击的回调
     * @ignore
     */
    onClick?: (value: string, value2: string)=>void

    /**
     * 是否激活
     * @ignore
     */
    active?: boolean

    /**
     * 子元素
     * @ignore
     */
    optChildren?: any

    /**
     * 设置label
     * @ignore
     */
    setLabelValue?: (value?: string)=>void

    /**
     * @ignore
     */
    activeValue?: string

    /**
     * @ignore
     */
    searchValue?: string
}

export class PropsGaea {
    gaeaName = '下拉选择框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-select'
}

export class Props extends PropsGaea implements PropsDefine {
    label = '分组'
    ignoreChildren = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                