import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './modal.type'
import * as classNames from 'classnames'

import Button from 'nt-web-button'
import {TransmitTransparently} from 'nt-transmit-transparently'

import './modal.scss'

@TransmitTransparently()
export default class Modal extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private modalDom: HTMLElement

    // 确定
    handleOk() {
        this.props.onOk()
    }

    // 取消
    handleCancel() {
        this.props.onCancel()
    }

    handleOutClick() {
        if (!this.props.backdropClickToClose)return
        this.handleCancel()
    }

    handleModalClick(event: TouchEvent) {
        event.stopPropagation()
    }

    componentDidMount() {
        // 在 body 生成 modal
        this.modalDom = document.createElement('div')
        document.body.appendChild(this.modalDom)
        this.renderModalDom()
    }

    componentDidUpdate() {
        this.renderModalDom()
    }

    componentWillUnmount() {
        document.body.removeChild(this.modalDom)
    }

    renderModalDom() {
        const classes = classNames({
            '_namespace': true,
            'modal': true,
            'fade': true,
            'in': true,
            [this.props.className]: !!this.props.className
        })
        let others: any = Object.assign({}, this.props.others)

        others.style = others.style || {}
        others.style.display = this.props.show ? 'block' : null

        const extraModalSizeClass = classNames({
            'modal-dialog': true,
            'modal-lg': this.props.size === 'large',
            'modal-sm': this.props.size === 'small'
        })

        const ModalElement = (
            <div {...others}
                className={classes}
                onClick={this.handleOutClick.bind(this)}
                tabIndex={-1}>
                <div className={extraModalSizeClass}
                     onClick={this.handleModalClick.bind(this)}>
                    <div className="modal-content">
                        {this.props.title === '' ? null :
                            <div className="modal-header">
                                <button type="button"
                                        className="close">
                                    <span onClick={this.handleCancel.bind(this)}>×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <h4 className="modal-title">{this.props.title}</h4>
                            </div>
                        }
                        <div className="modal-body"
                             style={{marginTop:this.props.title===''?20:null}}>
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.renderOperateButton() ? this.props.renderOperateButton(this.handleOk.bind(this), this.handleCancel.bind(this)) :
                                <div>
                                    <Button onClick={this.handleCancel.bind(this)}
                                            type="secondary">
                                        {this.props.cancelText}
                                    </Button>
                                    <Button type="primary"
                                            onClick={this.handleOk.bind(this)}>{this.props.okText}</Button>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        )

        ReactDOM.render(ModalElement, this.modalDom)
    }

    render() {
        return null as any
    }
}
                