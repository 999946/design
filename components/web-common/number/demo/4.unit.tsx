import * as React from 'react'
import {observer} from 'mobx-react'
import Number from '../index'

const unit = [{
    key: '%',
    value: '%'
}, {
    key: 'px',
    value: 'px'
}]

@observer
export default class Demo extends React.Component <any, any> {
    static title = '单位'
    static description = ``

    render() {
        return (
            <Number style={{width:200}}
                    unit={unit}/>
        )
    }
}
                