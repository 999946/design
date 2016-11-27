import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>可以将每个 next 项目单独跑起来的脚本</div>
        )
    }
}
                