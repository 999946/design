import * as React from 'react'
import {observer} from 'mobx-react'
import Image from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <Image source={require('./images/first.png')}
                   style={{width:300,height:200}}/>
        )
    }
}
                