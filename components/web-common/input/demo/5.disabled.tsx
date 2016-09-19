import * as React from 'react'
import {observer} from 'mobx-react'
import Input from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '禁用状态'
    static description = ``

    render() {
        return (
            <Input disabled/>
        )
    }
}
                