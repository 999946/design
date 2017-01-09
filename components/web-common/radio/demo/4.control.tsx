import * as React from 'react'
import {observer} from 'mobx-react'
import Radio from '../index'
import Checkbox from 'nt-web-checkbox'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '外部控制'
    static description = ``

    constructor(props: any) {
        super(props)
        this.state = {
            checked: false,
            disable: false
        }
    }

    handleCheck(checked: boolean) {
        this.setState({
            checked: checked
        })
    }

    handleDisable(checked: boolean) {
        this.setState({
            disabled: checked
        })
    }

    render() {
        return (
            <div>
                <Radio checked={this.state.checked}
                       disabled={this.state.disabled}>可受外部控制</Radio>
                <Checkbox style={{marginLeft: 10}}
                          onChange={this.handleCheck.bind(this) }>选中</Checkbox>
                <Checkbox style={{marginLeft: 10}}
                          onChange={this.handleDisable.bind(this) }>禁用</Checkbox>
            </div>
        )
    }
}