import * as React from 'react'
import {observer} from 'mobx-react'
import {Select, Option} from '../index'

const selects: any = {
    defaultValue: 'aa',
    options: [{
        key: 'a',
        value: '北京',
        children: [{
            key: 'a1',
            value: '海淀区'
        }, {
            key: 'a2',
            value: '朝阳区'
        }]
    }, {
        key: 'b',
        value: '安徽',
        children: [{
            key: 'b1',
            value: '合肥市',
            children: [{
                key: 'b11',
                value: '庐阳区'
            }, {
                key: 'b12',
                value: '瑶海区'
            }]
        }, {
            key: 'b2',
            value: '芜湖市'
        }, {
            key: 'b3',
            value: '淮南市'
        }]
    }],
    onChange: (value: string)=> {
        console.log('级联选中:', value)
    }
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '级联'
    static description = ``

    render() {
        return (
            <Select {...selects} label="请选择城市"/>
        )
    }
}
                