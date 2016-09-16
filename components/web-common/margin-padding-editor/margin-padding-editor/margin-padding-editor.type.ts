import * as React from 'react'

export type MarginPaddingField = 'paddingLeft' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'marginLeft' | 'marginTop' | 'marginRight' | 'marginBottom' | ''

export interface PropsDefine {
    /**
     * 当值修改的时候
     */
    onChange?: (type?: MarginPaddingField, value?: number)=>void

    /**
     * 大小
     */
    size?: number

    // paddingLeft 初始值
    paddingLeft?: number
    // paddingTop 初始值
    paddingTop?: number
    // paddingRight 初始值
    paddingRight?: number
    // paddingBottom 初始值
    paddingBottom?: number
    // marginLeft 初始值
    marginLeft?: number
    // marginTop 初始值
    marginTop?: number
    // marginRight 初始值
    marginRight?: number
    // marginBottom 初始值
    marginBottom?: number
}

export class PropsGaea {
    gaeaName = '内/外边距编辑器'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-margin-padding-editor'
}

export class Props extends PropsGaea implements PropsDefine {
    size = 200
    onChange = ()=> {
    }
    paddingLeft = 0
    paddingTop = 0
    paddingRight = 0
    paddingBottom = 0
    marginLeft = 0
    marginTop = 0
    marginRight = 0
    marginBottom = 0
}

export interface StateDefine {
    paddingLeft?: number
    paddingTop?: number
    paddingRight?: number
    paddingBottom?: number
    marginLeft?: number
    marginTop?: number
    marginRight?: number
    marginBottom?: number
}

export class State implements StateDefine {

}
                