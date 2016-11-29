import * as React from 'react'
import {observer} from 'mobx-react'
import Message from '../index'
import Button from 'nt-web-button'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '不同场景的提示'
    static description = ``

    onClick(type: string) {
        switch (type) {
            case 'info':
                Message.info('默认', 3)
                break
            case 'success':
                Message.success('成功', 3)
                break
            case 'error':
                Message.error('错误', 3)
                break
            case 'warning':
                Message.warning('警告', 3)
                break
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this.onClick.bind(this,'info')}>提醒</Button>
                <Button onClick={this.onClick.bind(this,'success')}
                        style={{marginLeft:10}}>成功</Button>
                <Button onClick={this.onClick.bind(this,'error')}
                        style={{marginLeft:10}}>错误</Button>
                <Button onClick={this.onClick.bind(this,'warning')}
                        style={{marginLeft:10}}>警告</Button>
            </div>
        )
    }
}
                