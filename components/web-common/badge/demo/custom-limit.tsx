import * as React from 'react'
import {observer} from 'mobx-react'
import Badge from '../index'

const boxStyle = {
    width: 42,
    height: 42,
    borderRadius: 6,
    background: '#eee',
    display: 'inline-block'
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '自定义最大值'
    static description = ``

    render() {
        return (
            <Badge overflowCount={998}
                   count={9999999}>
                <div style={boxStyle}></div>
            </Badge>
        )
    }
}
