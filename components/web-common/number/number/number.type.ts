import * as React from 'react'
import {InputPropsDefine} from '../../input/index'

export interface PropsDefine extends InputPropsDefine {
    /**
     * 最小值
     */
    min?: number

    /**
     * 最大值
     */
    max?: number

    /**
     * 增减步长
     */
    step?: number

    /**
     * 精确到多少位小数
     */
    float?: number

    /**
     * 长按变化频率
     */
    speed?: number
}

export class PropsGaea {
    gaeaName = '数字框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-number'
}

export class Props extends PropsGaea implements PropsDefine {
    min = -Infinity
    max = Infinity
    step = 1
    float = 0
    speed = 200
    onChange = ()=> {
    }
}

export interface StateDefine {
    value?: string
}

export class State implements StateDefine {

}
                