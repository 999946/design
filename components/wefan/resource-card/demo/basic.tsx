import * as React from 'react'
import {observer} from 'mobx-react'
import ResourceCard from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '默认态'
    static description = ``

    render() {
        return (
            <ResourceCard title="资源名"/>
        )
    }
}