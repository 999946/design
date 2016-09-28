import * as React from 'react'
import {observer} from 'mobx-react'
import Number from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '范围控制'
    static description = ``

    render() {
        return (
            <div>
                <Number label="最大10,精确1位小数"
                        float={1}
                        max={10}/>
                <Number label="最小-1,精确3位小数"
                        float={3}
                        min={-1}
                        style={{marginTop:10}}/>
            </div>
        )
    }
}
                