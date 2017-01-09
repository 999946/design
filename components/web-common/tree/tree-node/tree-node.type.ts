import * as React from 'react'
import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 标题
     */
    title?: string

    /**
     * 是否展示子元素
     */
    showChildren?: boolean

    /**
     * 是否默认展开全部
     */
    defaultExpendAll?: boolean

    /**
     * 标题渲染
     */
    render?: () => void

    /**
     * 点击展开/隐藏后的回调
     */
    onToggleShow?: (title?: any) => void

    /**
     * 整体被点击回调
     */
    onClick?: (event: Event)=>void

    /**
     * 是否通过点击小箭头展开/隐藏
     */
    toggleByArrow?: boolean

    others?: any
}

export class PropsGaea {
    gaeaName = '折叠树'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-tree'
}

export class Props extends PropsGaea implements PropsDefine {
    title = ''
    showChildren = false
    defaultExpendAll = false
    toggleByArrow = false
    onToggleShow = ()=> {
    }
    render = () => {
    }
    onClick = () => {
    }
}

export interface StateDefine {
    /**
     * 是否显示children
     */
    showChildren?: boolean
}

export class State implements StateDefine {
    showChildren = false
}
                