import * as React from 'react'
import {observer} from 'mobx-react'
import Number from '../index'

const units = [{
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

    handleChange(value: string, unit: string) {
        console.log(`value:${value}, unit:${unit}`)
    }

    render() {
        return (
            <Number style={{width:200}}
                    units={units}
                    currentUnit="px"
                    onChange={this.handleChange}/>
        )
    }
}
                