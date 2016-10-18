import * as React from 'react'
import * as typings from './auto-complete.type'

export default class AutoComplete extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                自动完成
            </div>
        )
    }
}
                