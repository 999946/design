import * as React from 'react'
import {GifPropsDefine} from '../../../common/gif/index'

export interface PropsDefine extends GifPropsDefine {
    others?: any
}

export class PropsGaea {
    gaeaName = '图片'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-wefan-image'
}

export class Props extends PropsGaea implements PropsDefine {
    source = ''
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                