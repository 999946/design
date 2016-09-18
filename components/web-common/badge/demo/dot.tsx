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
    static title = '讨人嫌的小红点'
    static description = ``

    render() {
        return (
            <Badge dot>
                <a href="/">超链接</a>
            </Badge>
        )
    }
}
