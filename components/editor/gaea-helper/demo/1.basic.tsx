import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>辅助组件快速添加 gaea 配置</div>
        )
    }
}
                