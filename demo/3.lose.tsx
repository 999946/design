import * as React from 'react'
import {observer} from 'mobx-react'
import Timeago from '../index'

let weekAgo = new Date()
weekAgo.setHours(weekAgo.getHours() - 24 * 7)

let monthAgo = new Date()
monthAgo.setHours(monthAgo.getHours() - 24 * 30)

let yearAgo = new Date()
yearAgo.setHours(yearAgo.getHours() - 24 * 365)

@observer
export default class Demo extends React.Component <any, any> {
    static title = '失效的友好时间'
    static description = ``

    render() {
        return (
            <div>
                <Timeago date={weekAgo}/>
                <Timeago date={monthAgo}
                         style={{marginLeft:10}}/>
                <Timeago date={yearAgo}
                         loseTime={1000*60*60*24*364}
                         style={{marginLeft:10}}/>
            </div>
        )
    }
}
