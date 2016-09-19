import * as React from 'react'
import {observer} from 'mobx-react'
import Radio from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '禁用'
    static description = ``

    render() {
        return (
            <Radio disabled>被禁用</Radio>
        )
    }
}
                