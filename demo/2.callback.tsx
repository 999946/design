import * as React from 'react'
import {observer} from 'mobx-react'
import Input from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '回调'
    static description = ``

    handleChange(event: any) {
        console.log(event.target.value)
    }

    render() {
        return (
            <Input onChange={this.handleChange.bind(this)}/>
        )
    }
}
                