import * as React from 'react'
import {observer} from 'mobx-react'
import {Select, Option} from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '禁用状态'
    static description = ``

    handleChange(value: any) {
        console.log('基础用法', value)
    }

    render() {
        return (
            <Select value="a">
                <Option value="a">小明</Option>
                <Option value="b">小红</Option>
                <Option value="d"
                        disabled>小王</Option>
                <Option value="e">小李</Option>
            </Select>
        )
    }
}
                