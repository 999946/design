import * as React from 'react'
import {observer} from 'mobx-react'
import Timeago from '../index'

const chinese = {
    ago: '之前',
    fromNow: '从现在开始',
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天',
    week: '周',
    month: '月',
    year: '年'
}

const formatter = (value: number, unit: string, suffix: string)=> {
    return value + ' ' + unit + ' ' + suffix
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '自定义友好文字'
    static description = ``

    render() {
        return (
            <Timeago date={new Date()}
                     customLabel={chinese}
                     formatter={formatter}/>
        )
    }
}
