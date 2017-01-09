import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 值
     */
    value?: string
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 输入改变的回调
     */
    onChange?: (checked?: boolean) => void
    /**
     * 是否选中
     */
    checked?: boolean
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean
    /**
     * 大小
     */
    size?: string

    others?: any
}

export class PropsGaea {
    gaeaName = '单选框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-radio'
}

export class Props extends PropsGaea implements PropsDefine {
    disabled = false
    onChange = () => {
    }
    defaultChecked = false
}

export interface StateDefine {
    /**
     * 是否选中
     */
    checked?: boolean
}

export class State implements StateDefine {

}
                