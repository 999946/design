import * as React from 'react'
import {observer} from 'mobx-react'
import Message from '../index'
import Button from 'nt-web-button'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '回调'
    static description = ``

    onClick() {
        Message.info('显示提示', 2, ()=> {
            Message.error('关闭了')
        })
    }

    render() {
        return (
            <Button onClick={this.onClick.bind(this)}>关闭后会再弹一次</Button>
        )
    }
}
                