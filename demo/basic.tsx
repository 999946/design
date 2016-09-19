import * as React from 'react'
import {observer} from 'mobx-react'
import ImagePreload from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    constructor(props: any) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentWillMount() {
        ImagePreload(['http://image.tianjimedia.com/uploadImages/2013/246/QCT323YPH3QB.jpg', 'http://img.tuku.cn/file_big/201502/a164f532912d4d42a3b2e8688d8099cd.jpg', 'http://img.tuku.cn/file_big/201502/89448ed96e524552a46abce14fab2eb8.jpg'], ()=> {
            this.setState({
                loaded: true
            })
        })
    }

    render() {
        return (
            <div>{this.state.loaded ? '图片加载完毕' : '预加载图片中'}</div>
        )
    }
}
                