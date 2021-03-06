import * as React from 'react'
import {observer} from 'mobx-react'
import Checkbox from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    handleChange(checked: boolean) {
        console.log(checked)
    }

    render() {
        return (
            <div>
                <Checkbox onChange={this.handleChange.bind(this)}/>
                <Checkbox checked/>
                <Checkbox>点击选中</Checkbox>
            </div>
        )
    }
}
                