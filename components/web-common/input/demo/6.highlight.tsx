import * as React from 'react'
import {observer} from 'mobx-react'
import Input from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '高亮'
    static description = ``

    render() {
        return (
            <Input highlight={true}/>
        )
    }
}
                