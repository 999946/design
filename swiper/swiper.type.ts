import * as React from 'react'
import {ViewProperties} from 'react-native'

export interface PropsDefine extends ViewProperties {
    /**
     * 滑动最大距离 1-100
     */
    maxDistance?: number

    /**
     * 滑动到百分之多少就可以进入下一张 1-100
     */
    threshold?: number

    /**
     * 滑动速度多快可以进入下一张
     */
    thresholdSpeed?: number
}

export class Props implements PropsDefine {
    maxDistance = 90
    threshold = 45
    thresholdSpeed = 1
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                