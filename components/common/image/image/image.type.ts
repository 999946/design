import * as React from 'react'

export interface PropsDefine extends React.HTMLAttributes {

}

export class PropsGaea {
    gaeaName = '图片'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-image'
}

export class Props extends PropsGaea implements PropsDefine {
    vertical = false
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                