import * as React from 'react'
import {observer} from 'mobx-react'
import {autoBindMethod} from '../index'
import {Button} from 'nt-web-button'

@observer
export default class Demo extends React.Component <any, any> {
    static title = 'Bind Method'
    static description = ``

    private name = '直接绑定在 class 上, 所有方法都不需要手动 bind, 并且只会在初始化时绑定一次'

    @autoBindMethod
    handleClick() {
        console.log(this.name)
    }

    render() {
        return (
            <Button onClick={this.handleClick}>点击输出 this.name</Button>
        )
    }
}
                