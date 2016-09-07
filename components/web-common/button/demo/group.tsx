import * as React from 'react'
import {observer} from 'mobx-react'
import {Button, ButtonGroup} from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '按钮组'
    static description = ``

    render() {
        return (
            <ButtonGroup>
                <Button>按钮</Button>
                <Button>按钮</Button>
                <Button>按钮</Button>
            </ButtonGroup>
        )
    }
}