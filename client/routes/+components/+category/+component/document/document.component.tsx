import * as React from 'react'
import * as typings from './document.type'
import {observer, inject} from 'mobx-react'

import './document.scss'

@observer
export default class Document extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        let Documents = this.props.documents.map((document, index)=> {
            // props 实例
            const props = new document.type['Props']()
            // type 源码
            const typeCode = document.typeCode

            const tr = Object.keys(props).map((key, trIndex)=> {
                // 跳过 gaea 开头的属性
                if (key.startsWith('gaea')) {
                    return null
                }
                return (
                    <tr key={trIndex}>
                        <td>{key}</td>
                    </tr>
                )
            })

            return (
                <table key={index}>
                    <thead>
                    <tr>
                        <td>参数</td>
                        <td>类型</td>
                        <td>说明</td>
                        <td>默认值</td>
                        <td>可选值</td>
                        <td>必选</td>
                    </tr>
                    </thead>
                    <tbody>
                    {tr}
                    </tbody>
                </table>
            )
        })

        return (
            <div className="_namespace">
                {Documents}
            </div>
        )
    }
}