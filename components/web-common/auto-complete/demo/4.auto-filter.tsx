import * as React from 'react'
import {observer} from 'mobx-react'
import AutoComplete from '../index'

const opts = {
    datas: [{
        text: '小明',
        value: 1
    }, {
        text: '小王',
        value: 1
    }, {
        text: '小红',
        value: 1
    }],
    autoFilter: true,
    placeholder: '小明 小王 小红'
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '自动过滤非正确内容'
    static description = ``

    render() {
        return (
            <AutoComplete {...opts}/>
        )
    }
}
                