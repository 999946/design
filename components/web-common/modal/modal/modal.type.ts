import * as React from 'react'
import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 取消按钮文字
     */
    cancelText?: string

    /**
     * 确认按钮文字
     */
    okText?: string

    /**
     * 是否显示模态框
     */
    show?: boolean

    /**
     * 模态框标题
     */
    title?: string

    /**
     * 点击确认回调
     */
    onOk?: ()=> void

    /**
     * 点击取消回调
     */
    onCancel?: ()=> void

    /**
     * 自定义按钮
     */
    renderOperateButton?: (onOk?: ()=>void, onCancel?: ()=>void)=>void

    /**
     * 点击遮罩层是否会关闭
     */
    backdropClickToClose?: boolean

    /**
     * 大小
     */
    size?: string

    others?: any
}

export class PropsGaea {
    gaeaName = '模态框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-web-modal'
}

export class Props extends PropsGaea implements PropsDefine {
    cancelText = '取消'
    okText = '确定'
    show = false
    title = ''
    onOk = ()=> {
    }
    onCancel = ()=> {
    }
    renderOperateButton = ()=> {
    }
    backdropClickToClose = true
    size = 'normal'
}

export interface StateDefine {

}

export class State implements StateDefine {

}
                