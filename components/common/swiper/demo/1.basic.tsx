import * as React from 'react'
import {observer} from 'mobx-react'
import Swiper from '../index'
import Image from 'nt-image'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <Swiper style={{width:300,height:300}}>
                <Image source={{uri:'http://img0.imgtn.bdimg.com/it/u=2609450077,4178219781&fm=21&gp=0.jpg'}}
                       style={{width:100,height:100}}/>
                <Image source={{uri:'http://img0.imgtn.bdimg.com/it/u=2609450077,4178219781&fm=21&gp=0.jpg'}}
                       style={{width:150,height:150}}/>
                <Image source={{uri:'http://img0.imgtn.bdimg.com/it/u=2609450077,4178219781&fm=21&gp=0.jpg'}}
                       style={{width:300,height:300}}/>
            </Swiper>
        )
    }
}
                