import * as React from 'react'
import {observer} from 'mobx-react'
import Tooltip from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '点击弹出'
    static description = ``

    render() {
        return (
            <Tooltip type="click">
                <span>点击会出现提示</span>
            </Tooltip>
        )
    }
}