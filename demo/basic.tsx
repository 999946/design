import * as React from 'react'
import {observer} from 'mobx-react'
import Gif from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <Gif source={{uri:'http://img1.imgtn.bdimg.com/it/u=1452441092,486151961&fm=21&gp=0.jpg'}}
                 style={{width:200,height:150}}/>
        )
    }
}
                