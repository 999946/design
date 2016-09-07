import * as React from 'react'
import {View, Text} from 'react-native'
import {observer} from 'mobx-react'
import Image from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '图片读取失败时添加额外内容'
    static description = ``

    errorAddon() {
        return (
            <View style={{position:'absolute',left:10,top:10}}>
                <Text>读取失败啦</Text>
            </View>
        )
    }

    render() {
        return (
            <Image source={{uri:'http://img0.imgtn.bdimg1.com/it/u=3097163328,1451177224&fm=15&gp=0.jpg'}}
                   fallbackColor="#eee"
                   fallbackAddon={this.errorAddon.bind(this)}
                   style={{width:100,height:100}}/>
        )
    }
}
