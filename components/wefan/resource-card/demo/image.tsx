import * as React from 'react'
import {observer} from 'mobx-react'
import ResourceCard from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '配置图片'
    static description = ``

    render() {
        return (
            <ResourceCard title="资源名"
                          pictureSource={{uri:'http://img1.imgtn.bdimg.com/it/u=1759831704,749363101&fm=11&gp=0.jpg'}}/>
        )
    }
}