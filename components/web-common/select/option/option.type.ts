import * as React from 'react'
import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 回调响应的值
     */
    value?: string

    /**
     * 禁用
     */
    disabled?: boolean

    /**
     * 层级,普通是1,级联后一次递增
     */
    zIndex?: number

    /**
     * 点击的回调
     * @ignore
     */
    onClick?: (value: string, value2: string, value3: any, zIndex: number)=>void

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
    setLabelValue?: (value:string, labelValue:string)=>void

    /**
     * @ignore
     */
    activeValue?: string

    /**
     * @ignore
     */
    searchValue?: string
}

export class Props implements PropsDefine {
    value = ''
    disabled = false
    zIndex = 1
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                