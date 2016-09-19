import * as React from 'react'
import {observer} from 'mobx-react'
import Switch from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '自定义大小'
    static description = ``

    render() {
        return (
            <div>
                <Switch type="success"
                        size="small"
                        checked/>
                <Switch checked
                        style={{marginLeft:10}}/>
                <Switch type="primary"
                        size="large"
                        checked
                        style={{marginLeft:10}}/>
            </div>
        )
    }
}
                