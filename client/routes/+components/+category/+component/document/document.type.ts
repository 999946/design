import * as React from 'react'
import {Document} from '../component.type'

export interface PropsDefine {
    /**
     * 当前组件的信息, 从根目录 components 里读的
     */
    componentInfo?: Components.ComponentConfig

    /**
     * 所属分类信息
     */
    categoryInfo?: Components.Category

    /**
     * 文档
     */
    documents?: Array<Document>
}

export class Props implements PropsDefine {
}

export interface StateDefine {

}

export class State implements StateDefine {

}