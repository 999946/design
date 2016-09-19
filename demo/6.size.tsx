import * as React from 'react'
import {observer} from 'mobx-react'
import Radio from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '尺寸'
    static description = ``

    render() {
        return (
            <div>
                <Radio size="large">大尺寸</Radio>
                <Radio size="small"
                       style={{ marginLeft: 20 }}>小尺寸</Radio>
            </div>
        )
    }
}
                