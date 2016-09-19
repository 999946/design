import * as React from 'react'
import {observer} from 'mobx-react'
import Input from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>
                <Input/>
                <Input label="自定义提示文字"/>
                <Input label="含有占位提示"
                       placeholder="请使用真实姓名"/>
                <Input label="自定义宽度"
                       style={{width:500}}/>
            </div>
        )
    }
}
                