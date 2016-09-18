import * as React from 'react'
import {observer} from 'mobx-react'
import Badge from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '单独使用'
    static description = ``

    render() {
        return (
            <div>
                <Badge count={5}/>
                <Badge count={3}
                       style={{background:'#3a3f51',marginLeft:15}}/>
                <Badge count={500}
                       style={{background:'#27c24c',marginLeft:15}}/>
            </div>
        )
    }
}
