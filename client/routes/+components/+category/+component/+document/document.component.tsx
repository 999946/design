import * as React from 'react'
import * as typings from './document.type'
import FullComponentInfo from '../full-component-info/full-component-info.component'
import * as classNames from 'classnames'
import {Link} from 'react-router'
import {observer, inject} from 'mobx-react'
import {
    getPropsDefineBySourceCode,
    parsePropsDefine,
    getPropsBySourceCode,
    parseProps,
    parsePropsDefineExtends
} from './document-tools'

import './document.scss'

@observer
export default class Document extends FullComponentInfo <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentDidMount() {
        if (this.props.location.query['component']) {
            // 指定了跳转到某一个组件实例 TODO:
        }
    }

    render() {
        if (!this.state.componentFullInfo) {
            return null
        }

        let Documents = this.state.componentFullInfo.documents.map((document, index)=> {
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

            // 分析 PropsDefine 中继承关系
            const allExtends = parsePropsDefineExtends(typeCode, document.typePath)

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

                // 忽略 others, 这个是透传属性
                if (props.name === 'others') {
                    return null
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

            // 如果有依赖的文档，添加在 tr 之上
            if (allExtends.length > 0) {
                allExtends.forEach(extend=> {
                    let key: string
                    let ExtendDep: React.ReactElement<any>
                    let text: string
                    let linkUrl: string

                    switch (extend.type) {
                        case 'component':
                            key = `${extend.category.prefix}-${extend.component.name}`
                            text = `本组件实例继承了 ${extend.category.prefix}-${extend.component.name} 中 {${extend.extendName}} 实例的所有属性`
                            linkUrl = `/components/${extend.category.name}/${extend.component.name}/document?component=${extend.extendName}`
                            break
                        case 'npm':
                            key = extend.moduleName
                            text = `本组件实例继承了第三方库 ${extend.moduleName} 中 {${extend.extendName}} 的所有属性`
                            linkUrl = `/components/third-components/${extend.moduleName}?component=${extend.extendName}`
                            break
                    }

                    ExtendDep = (
                        <tr key={key}>
                            <td colSpan="4">
                                <Link className="document-link"
                                      to={linkUrl}>{text}</Link>
                            </td>
                        </tr>
                    )

                    tr.unshift(ExtendDep)
                })
            }

            const importString = `import {${document.componentName}} from '${this.state.categoryInfo.prefix}-${this.state.componentInfo.name}'`

            return (
                <div key={index}
                     className="document-item">
                    <div className="export-name">
                        <div className="title">{document.componentName}</div>
                        <div className="import-doc">{importString}</div>
                    </div>
                    {tr.length > 0 &&
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
                    }
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