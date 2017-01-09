import * as React from 'react'
import {observer} from 'mobx-react'
import Badge from '../index'
import {Button, ButtonGroup} from '../../button/index'

const boxStyle = {
    width: 42,
    height: 42,
    borderRadius: 6,
    background: '#eee',
    display: 'inline-block'
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '修改时自带动效'
    static description = ``

    state = {
        count: 20
    }

    constructor(props: any) {
        super(props)
    }

    handleClick(number: number) {
        this.setState({
            count: this.state.count + number
        })
    }

    render() {
        const {count} = this.state

        return (
            <div>
                <Badge count={count}>
                    <div style={boxStyle}></div>
                </Badge>

                <ButtonGroup style={{marginLeft:15}}>
                    <Button onClick={this.handleClick.bind(this,-1)}>-</Button>
                    <Button onClick={this.handleClick.bind(this,1)}>+</Button>
                </ButtonGroup>
            </div>
        )
    }
}