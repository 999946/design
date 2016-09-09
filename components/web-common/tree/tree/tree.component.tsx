import * as React from 'react'
import * as typings from './tree.type'

export default class Tree extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div>
                折叠树
            </div>
        )
    }
}
                