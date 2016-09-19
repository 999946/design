import * as React from 'react'
import {observer} from 'mobx-react'
import Input from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '没有提示文字'
    static description = ``

    render() {
        return (
            <div>
                <Input label=""/>
                <Input label=""
                       placeholder="只有 placeholder"/>
            </div>
        )
    }
}
                