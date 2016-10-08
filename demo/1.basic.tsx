import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>提供给所有组件透传 Props 使用，例如任何组件都可以接受 style className 等属性，让我们对组件的控制更加灵活</div>
        )
    }
}
                