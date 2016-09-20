import * as React from 'react'
import {observer} from 'mobx-react'
import {Tabs, TabPanel} from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPanel tab="选项卡一"
                          activeKey="1">选项卡一内容</TabPanel>
                <TabPanel tab="选项卡二"
                          activeKey="2">选项卡二内容</TabPanel>
                <TabPanel tab="选项卡三"
                          activeKey="3">选项卡三内容</TabPanel>
            </Tabs>
        )
    }
}
                