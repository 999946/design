import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 是否选中
     */
    checked?: boolean
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean
    /**
     * 选中状态修改时的回调
     */
    onChange?: (checked?: boolean) => void
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 大小
     */
    size?: string

    others?: any
}

export class PropsGaea {
    gaeaName = '多选框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-checkbox'
}

export class Props extends PropsGaea implements PropsDefine {
    disabled = false
    onChange = () => {
    }
    size = 'normal'
}

export interface StateDefine {
    /**
     * 是否选中
     */
    checked?: boolean
}

export class State implements StateDefine {

}
                