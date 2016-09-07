import * as React from 'react'
import {observer} from 'mobx-react'
import Image from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '图片加载失败显示默认图'
    static description = ``

    constructor(props: any) {
        super(props)
        this.state = {
            url: 'http://img5.imgtn.bdim.com/it/u=3586233367,3171193232&fm=11&gp=0.jpg'
        }
    }

    render() {
        return (
            <Image firstSource={{uri:this.state.url}}
                   source={require('./images/all.gif')}
                   style={{width:300,height:200}}/>
        )
    }
}
                