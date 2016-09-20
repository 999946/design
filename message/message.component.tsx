import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './message.type'
import * as classNames from 'classnames'

import './message.scss'

export default class Message extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    static newInstance = (props: typings.PropsDefine) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const reactElement = React.createElement<typings.PropsDefine>(Message, props)
        const reactInstance = ReactDOM.render(reactElement, div) as Message

        return {
            destroy() {
                reactInstance.destroy()
                setTimeout(()=> {
                    ReactDOM.unmountComponentAtNode(div)
                    document.body.removeChild(div)
                }, 200)
            }
        }
    }

    /**
     * 实例化一个新的消息并显示
     */
    static show(content: string, duration: number = 1.5, type?: string, onClose?: Function) {
        const instance = Message.newInstance({
            content: content,
            type: type
        })

        setTimeout(()=> {
            if (instance) {
                instance.destroy()
            }
            onClose && onClose()
        }, duration * 1000)
    }

    /**
     * show 一个提醒
     */
    static info(content: string, duration?: number, onClose?: Function) {
        return Message.show(content, duration, 'info', onClose)
    }

    /**
     * show 一个成功
     */
    static success(content: string, duration?: number, onClose?: Function) {
        return Message.show(content, duration, 'success', onClose)
    }

    /**
     * show 一个错误
     */
    static error(content: string, duration?: number, onClose?: Function) {
        return Message.show(content, duration, 'error', onClose)
    }

    /**
     * show 一个警告
     */
    static warning(content: string, duration?: number, onClose?: Function) {
        return Message.show(content, duration, 'warning', onClose)
    }

    componentDidMount() {
        this.setState({
            status: 'enter'
        })
    }

    /**
     * 销毁
     */
    destroy() {
        this.setState({
            status: 'leave'
        })
    }

    render() {
        const classes = classNames({
            'lywrap': true,
            [this.state.status]: !!this.state.status
        })

        const typeClass = classNames({
            'lyct': true,
            [this.props.type]: true
        })

        return (
            <div className="_namespace">
                <div className="m-layer z-show">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div className={classes}>
                                    <div className={typeClass}>
                                        {this.props.content}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
                