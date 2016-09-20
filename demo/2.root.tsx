import * as React from 'react'
import {observer} from 'mobx-react'
import JsonTree from '../index'

const jsonData = {
    keyword: 'abc',
    owner: 'ascoders',
    age: 23,
    lists: [1, 2, 3, 4, 5],
    info: {
        lists: ['11', '22', '33'],
        isOnline: true
    },
    arr: [{
        a: 1,
        b: 2
    }, {
        c: '3',
        d: false
    }]
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '从根级展开'
    static description = ``

    render() {
        return (
            <JsonTree root={true}
                      json={jsonData}/>
        )
    }
}
                