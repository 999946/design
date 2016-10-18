import * as React from 'react'
import {observer} from 'mobx-react'
import AutoComplete from '../index'

const opts = {
    // url: '/api/auto-complete/basic',
    // method: 'get',
    // beforeSend: (value:any)=> {
    //     return {
    //         search: value
    //     }
    // },
    // complete: (res:any)=> {
    //     return res
    // },
    // delay: 200,
    // onSelect: (value:any)=> {
    //     console.log(value)
    // }
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '选中的回调'
    static description = ``

    render() {
        return (
            <AutoComplete {...opts}/>
        )
    }
}
                