import * as React from 'react'
import {InputPropsDefine} from 'nt-web-input'

export interface PropsDefine extends InputPropsDefine {
    /**
     * 级联是否为完整路径
     */
    cascaderFull?: boolean

    /**
     * 是否可筛选
     */
    search?: boolean

    /**
     * 极简模式,适合在文本中做选择框
     */
    simple?: boolean

    /**
     * 配置项,这个项目存在,将忽略对子元素 Option 处理
     */
    options?: Array<Options>
}

export class PropsGaea {
    gaeaName = '下拉选择框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-select'
}

export class Props extends PropsGaea implements PropsDefine {
    onChange = () => {
    }
    search = false
    simple = false
    value = ''
    defaultValue = ''
    options = new Array()
    cascaderFull = false
}

export interface StateDefine {
    open?: boolean
    value?: string
    searchValue?: string

    /**
     * 显示值
     */
    labelValue?: string

    /**
     * 存储了级联列表
     */
    cascader?: Array<cascaderOption>

    /**
     * option key 前缀，当 props 更新时，要重新刷新 options，就为了调用 willMount 方法
     * 因为为了找到 activeLabel，必须在子元素里做（因为可能不是通过配置设置的），但这样会有循环引用，所以强刷新
     */
    optionKeyPrefix?: string
}

export class State implements StateDefine {
    open = false
    searchValue = ''
    labelValue = ''
    cascader = new Array()
    optionKeyPrefix = ''
}

/**
 * 配置项
 */
export interface Options {
    /**
     * 值
     */
    key: string,

    /**
     * 显示字符串
     */
    value: string,

    /**
     * 子元素,二层深度以上子元素表示级联
     */
    children?: Array<Options>

    /**
     * 表示自己是分组,children不再表示级联,而是普通子元素,value key属性无效
     */
    groupValue?: string
}

/**
 * 级联元素配置项
 */
export interface cascaderOption {
    /**
     * 当前级联选中值
     */
    value: string

    /**
     * 级联配置
     */
    options: Array<Options>

    /**
     * 当前显示值,给级联完整路径在输入框显示时使用
     */
    labelValue?: string
}