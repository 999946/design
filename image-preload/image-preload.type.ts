import * as React from 'react'

export interface PropsDefine {
    /**
     * 图片 url 地址数组
     */
    pictureUrls?: Array<string>
    /**
     * 所有图片加载完毕的回调
     */
    callback?: ()=>void
}

export class PropsGaea {
    gaeaName = '图片预加载'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-image-preload'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                