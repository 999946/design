import * as React from 'react'
import {observer} from 'mobx-react'
import Number from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '调整按钮长按变化速度'
    static description = ``

    render() {
        return (
            <Number speed={50}/>
        )
    }
}
                