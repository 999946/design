import * as React from 'react'
import {observer} from 'mobx-react'
import Gif from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '点击后播放'
    static description = ``

    render() {
        return (
            <Gif firstSource={require('./images/first.png')}
                 source={require('./images/all.gif')}
                 style={{width:200,height:150}}/>
        )
    }
}
