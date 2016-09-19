import * as React from 'react'
import {observer} from 'mobx-react'
import Tooltip from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '根据空间剩余自动换位置'
    static description = ``

    render() {
        return (
            <Tooltip position="left"
                     title={'很长的内容'.repeat(5)}>
                <span>虽然设置在左侧，但内容非常长时，可能会被移到右边</span>
            </Tooltip>
        )
    }
}