import * as React from 'react'
import {HTMLProps} from 'react'

import {ExtendValidatorStatic} from './validate'

export interface PropsDefine extends HTMLProps<HTMLInputElement> {
    /**
     * 提示文字
     */
    label?: string

    /**
     * 获得焦点是否高亮
     */
    highlight?: boolean

    /**
     * 获得焦点是否有高亮线
     */
    highlightLine?: boolean

    /**
     * 右侧添加自定义元素
     */
    rightRender?: () => React.ReactElement<any>

    /**
     * 内部添加自定义元素
     */
    innerRender?: () => React.ReactElement<any>

    /**
     * 文字方向 居中或者靠左 left center
     */
    textAlign?: string

    /**
     * 验证回调,可以自定义更多验证逻辑
     */
    validateMiddleware?: (value?: string, validator?: ExtendValidatorStatic) => validateMiddlewareReturnInterface

    /**
     * 是否禁用
     */
    disabled?: boolean

    others?: any
}

export class PropsGaea {
    gaeaName = '输入框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-input'
}

export class Props extends PropsGaea implements PropsDefine {
    label = '请输入内容'
    highlight = false
    highlightLine = true
    rightRender = (): any => {
        return null
    }
    innerRender = (): any => {
        return null
    }
    textAlign = 'left'
    validateMiddleware = () => {
        return {ok: true}
    }
    disabled = false
    onChange = ()=> {
    }
}

export interface StateDefine {
    hasError?: boolean
    errorMessage?: string

    /**
     * 当前输入框数据
     */
    value?: string | string[]
}

export class State implements StateDefine {
    hasError = false
    errorMessage = ''
}

export interface validateMiddlewareReturnInterface {
    ok: boolean
    errorMessage?: string
}