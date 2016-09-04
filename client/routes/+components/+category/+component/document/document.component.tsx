import * as React from 'react'
import * as typings from './document.type'
import * as classNames from 'classnames'
import {observer, inject} from 'mobx-react'
import {getPropsDefineBySourceCode, parsePropsDefine, getPropsBySourceCode, parseProps} from './document-tools'

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

            // PropsDefine 中的代码
            const propsDefineSourceCode = getPropsDefineBySourceCode(typeCode)

            // propsDefine 数组
            let propsInfos = parsePropsDefine(propsDefineSourceCode)

            // 找出 Props 中的代码
            const propsSourceCode = getPropsBySourceCode(typeCode)

            // propsValue 数组
            const propsValues = parseProps(propsSourceCode)

            propsInfos = propsInfos.map(propsInfo=> {
                const propsValue = propsValues.find(propsValue=>propsValue.name === propsInfo.name)
                propsInfo.defaultValue = propsValue && propsValue.value
                return propsInfo
            })

            const tr = propsInfos.map((props, trIndex)=> {
                const trClasses = classNames({
                    'required': props.required
                })

                let requireName = ''
                if (props.required) {
                    requireName = '(必填)'
                }

                return (
                    <tr key={trIndex}
                        className={trClasses}>
                        <td>{props.name} {requireName}</td>
                        <td>
                            <pre>
                                <code>{props.type}</code>
                            </pre>
                        </td>
                        <td>
                            <pre>
                                <code>{props.description}</code>
                            </pre>
                        </td>
                        <td>
                            <pre>
                                <code>{props.defaultValue}</code>
                            </pre>
                        </td>
                    </tr>
                )
            })

            const importString = `import {${document.componentName}} from '${this.props.categoryInfo.prefix}-${this.props.componentInfo.name}'`

            return (
                <div key={index}>
                    <div className="export-name">
                        <div className="title">{document.componentName}</div>
                        <div className="import-doc">{importString}</div>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <td>参数</td>
                            <td>类型</td>
                            <td>说明</td>
                            <td>默认值</td>
                        </tr>
                        </thead>
                        <tbody>
                        {tr}
                        </tbody>
                    </table>
                </div>
            )
        })

        return (
            <div className="_namespace">
                {Documents}
            </div>
        )
    }
}