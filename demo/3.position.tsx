import * as React from 'react'
import {observer} from 'mobx-react'
import Tooltip from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '控制方向'
    static description = ``

    render() {
        return (
            <div>
                <Tooltip position="left">
                    <span>左侧</span>
                </Tooltip>

                <Tooltip position="top">
                    <span>上侧</span>
                </Tooltip>

                <Tooltip position="right">
                    <span>右侧</span>
                </Tooltip>

                <Tooltip position="bottom">
                    <span>下侧</span>
                </Tooltip>
            </div>
        )
    }
}