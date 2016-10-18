import * as React from 'react'
import {observer} from 'mobx-react'
import AutoComplete from '../index'

const opts = {
    datas: [{
        label: '小明',
        key: 1
    }, {
        label: '小王',
        key: 1
    }, {
        label: '小红',
        key: 1
    }],
    placeholder: '小明 小王 小红',
    parse: {
        text: 'label',
        value: 'key'
    }
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '本地数据'
    static description = ``

    render() {
        return (
            <AutoComplete {...opts}/>
        )
    }
}
                