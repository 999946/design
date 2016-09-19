import * as React from 'react'
import {observer} from 'mobx-react'
import Loading from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '不同大小'
    static description = ``

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Loading size={150}/>
                <Loading size={200}/>
                <Loading size={300}/>
            </div>
        )
    }
}
                