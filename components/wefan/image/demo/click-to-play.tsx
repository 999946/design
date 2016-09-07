import * as React from 'react'
import {observer} from 'mobx-react'
import Image from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '点击播放'
    static description = ``

    render() {
        return (
            <Image firstSource={require('./images/first.png')}
                   source={require('./images/all.gif')}
                   style={{width:300,height:200}}/>
        )
    }
}
                