import * as React from 'react'
import {Platform} from 'react-native'

export interface PropsDefine {
    /**
     * 资源图片
     */
    pictureSource?: {uri: string} | string
    /**
     * 资源名称
     */
    title: string
}

export class Props implements PropsDefine {
    title = '资源'
    pictureSource = require('./images/icon_more_url@2x.png')
}

export interface StateDefine {

}

export class State implements StateDefine {

}