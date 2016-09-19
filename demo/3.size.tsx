import * as React from 'react'
import {observer} from 'mobx-react'
import Checkbox from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '禁用'
    static description = ``

    render() {
        return (
            <div>
                <Checkbox size="large">大尺寸</Checkbox>
                <Checkbox size="small"
                          style={{marginLeft:20}}>小尺寸</Checkbox>
            </div>
        )
    }
}
                