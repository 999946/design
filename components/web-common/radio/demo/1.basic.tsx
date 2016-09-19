import * as React from 'react'
import {observer} from 'mobx-react'
import Radio from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>
                <Radio/>
                <Radio checked/>
                <Radio>点击选中</Radio>
            </div>
        )
    }
}
                