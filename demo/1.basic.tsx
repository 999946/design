import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
           <div>将微粉组件整合到盖亚组件，提供拖拽编辑</div>
        )
    }
}
                