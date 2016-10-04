import * as React from 'react'
import {HTMLAttributes} from 'react'

export interface TypeInterface {
    Default: string
    Primary: string
    Success: string
    Info: string
    Warning: string
    Danger: string
    Dark: string
}

export const Type: TypeInterface = {
    Default: 'default',
    Primary: 'primary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
    Dark: 'dark'
}

export interface PropsDefine extends HTMLAttributes {
    /**
     * 按钮风格类型
     */
        type?: string

    /**
     * 是否禁用
     */
    disabled?: boolean

    /**
     * 是否处于激活状态
     */
    active?: boolean

    /**
     * 是否loading中
     */
    loading?: boolean

    /**
     * 圆形按钮
     */
    rounded?: boolean

    /**
     * 左侧图标
     */
    addonLeft?: any

    /**
     * 右侧图标
     */
    addonRight?: any

    /**
     * 点击后的回调
     */
    onClick?: (event?: React.MouseEvent)=> void

    others?: any
}

export class Props implements PropsDefine {
    type = Type.Default
    disabled = false
    active = false
    loading = false
    rounded = false
    addonLeft: any = null
    addonRight: any = null
    onClick = ()=> {
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}