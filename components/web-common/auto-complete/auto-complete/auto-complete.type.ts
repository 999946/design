import * as React from 'react'
import {InputPropsDefine} from 'nt-web-input'

export interface PropsDefine extends InputPropsDefine {
    /**
     * 本地数据,如果不设置url,则使用此数据模拟查询
     */
    datas?: any

    /**
     * 自动筛选,当设置datas时请设置为true,如果服务器返回的结果有杂质需要过滤,也可以设置此参数
     */
    autoFilter?: boolean

    /**
     * 最大显示数量
     */
    maxNumber?: number

    /**
     * 请求类型
     */
    method?: string

    /**
     * 访问地址
     */
    url?: string

    /**
     * 选中时回调
     */
    onSelect?: (value: any) => void

    /**
     * 发送前执行函数
     */
    beforeSend?: (value: any) => any

    /**
     * 发送后执行函数
     */
    complete?: (res: any) => any

    /**
     * 解析后端内容时,显示值(text)与实际值(value)的参数名
     */
    parse?: parseInterface

    /**
     * 发送延迟
     */
    delay?: number
}

export class Props implements PropsDefine {
    datas = [] as any
    autoFilter = false
    maxNumber = 10
    method = 'get'
    url = ''
    onSelect = (value: number | string) => {
    }
    onChange = ()=> {
    }
    beforeSend = (value: number | string) => {
        return value
    }
    complete = (res: any) => {
        return res
    }
    parse = {
        text: 'text',
        value: 'value'
    }
    delay = 0
}

export interface StateDefine {
    /**
     * 是否显示自动完成
     */
    showComplete?: boolean

    /**
     * 预设或者是后端返回的全部datas
     */
    datas?: any

    /**
     * 去重后的datas
     */
    filterDatas?: any

    /**
     * 输入值
     */
    value?: string

    /**
     * 当前选中第几个
     */
    selectIndex?: number
}

export class State implements StateDefine {
    showComplete = false
    datas = new Array()
    filterDatas = new Array()
    value = ''
    selectIndex = -1
}

export interface parseInterface {
    text?: string
    value?: string
}
                