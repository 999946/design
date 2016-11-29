import * as React from 'react'
import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 选中状态改变
     */
    onChange?: (checked?: boolean)=>void,

    /**
     * 是否选中
     */
    checked?: boolean

    /**
     * 默认是否选中
     */
    defaultChecked?: boolean

    /**
     * 是否禁用
     */
    disabled?: boolean

    /**
     * 大小 'normal' | 'small' | 'large'
     */
    size?: string

    /**
     * 主题颜色 'info' | 'success' | 'primary' | 'danger' | 'warning' | 'dark'
     */
        type?: string

    /**
     * 标签文字宽度
     */
    labelWidth?: number

    /**
     * 选中时追加渲染内容
     */
    checkedChildrenRender?: React.ReactElement<any>

    /**
     * 没选中时追加渲染内容
     */
    unCheckedChildrenRender?: React.ReactElement<any>

    others?: any
}

export class PropsGaea {
    gaeaName = '开关'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-switch'
}

export class Props extends PropsGaea implements PropsDefine {
    checked: any = null
    defaultChecked: any = null
    onChange = ()=> {
    }
    size = 'normal'
    type = 'info'
    checkedChildrenRender: any = ()=> {
    }
    unCheckedChildrenRender: any = ()=> {
    }
}

export interface StateDefine {
    checked?: boolean
}

export class State implements StateDefine {
    checked = false
}
                