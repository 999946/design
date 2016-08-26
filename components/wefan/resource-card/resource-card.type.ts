import * as React from 'react'

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

export class PropsGaea {
    gaeaName = '资源卡片'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'wefan-resource-card'
    gaeaEdit = [{
        field: 'title',
        label: '资源描述',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsDefine {
    title = '资源'
    pictureSource = require('./images/resource.png')
}

export interface StateDefine {

}

export class State implements StateDefine {

}