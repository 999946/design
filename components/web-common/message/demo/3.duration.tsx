import * as React from 'react'
import {observer} from 'mobx-react'
import Message from '../index'
import Button from 'nt-web-button'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '回调'
    static description = ``

    onClick() {
        Message.success('持续1秒', 1)
    }

    render() {
        return (
            <Button onClick={this.onClick.bind(this)}>持续一秒</Button>
        )
    }
}
                