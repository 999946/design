import * as React from 'react'
import {observer} from 'mobx-react'
import {Radio, RadioGroup} from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '一组单选按钮'
    static description = ``

    render() {
        return (
            <div>
                <RadioGroup value="a">
                    <Radio value="a">A</Radio>
                    <Radio value="b">B</Radio>
                    <Radio value="c">C</Radio>
                </RadioGroup>

                <RadioGroup vertical
                            value="b"
                            style={{ marginTop: 10 }}>
                    <Radio disabled
                           value="a">AAAAAAAA</Radio>
                    <Radio value="b">BBBBBBBB</Radio>
                    <Radio value="c">CCCCCCCC</Radio>
                </RadioGroup>
            </div>
        )
    }
}
                