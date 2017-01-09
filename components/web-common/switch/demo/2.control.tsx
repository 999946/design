import * as React from 'react'
import {observer} from 'mobx-react'
import Switch from '../index'
import Button from 'nt-web-button'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '受控'
    static description = ``

    constructor(props: any) {
        super(props)
        this.state = {
            checked: true
        }
    }

    handleClick() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <div>
                <Switch checked={this.state.checked}/>
                <Button onClick={this.handleClick.bind(this)}
                        style={{marginLeft:10}}>点击切换选中状态</Button>
            </div>
        )
    }
}
                