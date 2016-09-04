import * as React from 'react'
import {observer} from 'mobx-react'
import Tooltip from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <Tooltip>
                <span>鼠标移到这,会出现提示</span>
            </Tooltip>
        )
    }
}