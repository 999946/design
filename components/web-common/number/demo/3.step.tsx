import * as React from 'react'
import {observer} from 'mobx-react'
import Number from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '调整按钮步长'
    static description = ``

    render() {
        return (
            <div>
                <Number label="步长为5"
                        step={5}/>
                <Number label="步长为1.5"
                        float={1}
                        step={1.5}
                        style={{marginTop:10}}/>
            </div>
        )
    }
}
                