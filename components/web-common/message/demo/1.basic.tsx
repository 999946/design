import * as React from 'react'
import {observer} from 'mobx-react'
import Message from '../index'
import Button from '../../button/index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    onClick() {
        Message.info('显示提示')
    }

    render() {
        return (
            <Button onClick={this.onClick.bind(this)}>全局提示</Button>
        )
    }
}
                