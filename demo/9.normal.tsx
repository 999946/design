import * as React from 'react'
import {observer} from 'mobx-react'
import {Input, ExtendValidatorStatic} from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '看似普通却能输入，尽量让用户忽略'
    static description = ``

    render() {
        return (
            <Input normal={true}/>
        )
    }
}
                