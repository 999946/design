import * as React from 'react'
import {observer} from 'mobx-react'
import Line from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '横线'
    static description = ``

    render() {
        return (
            <Line />
        )
    }
}
                