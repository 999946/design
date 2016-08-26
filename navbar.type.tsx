import * as React from 'react'
import {Image} from 'react-native'

export interface PropsDefine {
    /**
     * 是否有底部线
     */
    hasUnderLine?: boolean

    left?: any,
    leftExt?: JSX.Element,
    center?: JSX.Element,
    rightExt?: JSX.Element,
    right?: JSX.Element,
    title?: string,
    titleStyle?: string,
    onLeftPress?: () => any,
    onLeftExtPress?: () => any,
    onRightExtPress?: () => any,
    onRightPress?: () => any
}

export class PropsGaea {
    gaeaName = '导航条'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'wefan-navbar'
    gaeaEdit = [{
        field: 'title',
        label: '文字',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsDefine {
    hasUnderLine = true
    title = ''
    left = (
        <Image style={{height:65}}
               source={require('./images/back.png')}/>
    )
}

export interface StateDefine {

}

export class State implements StateDefine {

}