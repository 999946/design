import * as React from 'react'
import {observer} from 'mobx-react'
import Image from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '图片读取失败，展示兜底图'
    static description = ``

    render() {
        return (
            <Image source={{uri:'http://img0.imgtn.bdimg1.com/it/u=3097163328,1451177224&fm=15&gp=0.jpg'}}
                   fallbackSource={{uri:'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'}}
                   style={{width:100,height:100}}/>
        )
    }
}
