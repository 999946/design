import * as React from 'react'
import {observer} from 'mobx-react'
import ResourceCard from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '配置标题'
    static description = ``

    render() {
        return (
            <ResourceCard title="自定义标题, 注意标题是必填项"/>
        )
    }
}