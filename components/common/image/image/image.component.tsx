import * as React from 'react'
import * as typings from './image.type'

export default class Image extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div>
                图片
            </div>
        )
    }
}
                