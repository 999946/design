import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>Gaea 系列的定义文件</div>
        )
    }
}
                