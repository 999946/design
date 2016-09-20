import * as React from 'react'
import * as typings from './json-tree.type'
import * as classNames from 'classnames'

export default class JsonTree extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const classes = classNames({
            '_namespace': true
        })

        return (
            <div className={classes}>
                json 树
            </div>
        )
    }
}
                