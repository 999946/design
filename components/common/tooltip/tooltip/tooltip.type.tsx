import * as React from 'react'

export interface PropsDefine {
    /**
     * 文字内容
     */
    title?: string

    /**
     * 文字内容自定义渲染, 如果不设置文字内容, 此项生效
     * 与 title 不同, 此项可以返回一个 reactElement 对象, 显示复杂内容
     */
    titleRender?: ()=>React.ReactElement<any>

    /**
     * 纵向层级
     */
    zIndex?: number
}

export class PropsGaea {
    gaeaName = '工具提示'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'common-tooltip'
}

export class Props extends PropsGaea implements PropsDefine {
    title = ''
    titleRender = ()=> {
        return (
            <div>tool tip!</div>
        )
    }
    zIndex = 100
}

export interface StateDefine {
    /**
     * 子元素相对父级的位置
     */
    childrenTop?: number
    childrenLeft?: number
    childrenWidth?: number
    childrenHeight?: number

    /**
     * tooltip 宽高
     */
    tooltipWidth?: number
    tooltipHeight?: number

    /**
     * 是否显示 tooltip
     */
    show?: boolean
}

export class State implements StateDefine {
    childrenTop = 0
    childrenLeft = 0
    childrenWidth = 0
    childrenHeight = 0

    tooltipWidth = 0
    tooltipHeight = 0

    show = false
}