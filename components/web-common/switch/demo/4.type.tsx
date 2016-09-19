import * as React from 'react'
import {observer} from 'mobx-react'
import Switch from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '不同样式'
    static description = ``

    render() {
        return (
            <div>
                <Switch type="info"
                        checked/>
                <Switch type="success"
                        checked
                        style={{marginLeft:10}}/>
                <Switch type="primary"
                        checked
                        style={{marginLeft:10}}/>
                <Switch type="warning"
                        checked
                        style={{marginLeft:10}}/>
                <Switch type="danger"
                        checked
                        style={{marginLeft:10}}/>
                <Switch type="dark"
                        checked
                        style={{marginLeft:10}}/>
            </div>
        )
    }
}
                