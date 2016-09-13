import * as React from 'react'
import * as typings from './third-components.type'
import {observer, inject} from 'mobx-react'
import thirdComponentTypings from '../../../../../auto-create/third-component-typings'
import {parseDts} from '../../../../../utils/parse-typings'

import './third-components.scss'

@inject('application') @observer
export default class ComponentsThirdComponents extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.asyncGetComponentInfo(this.props)
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.asyncGetComponentInfo(nextProps)
    }

    componentDidMount(){

    }

    /**
     * 异步获取组件所有信息
     */
    asyncGetComponentInfo(props: typings.PropsDefine) {
        const getComponentFullInfo = thirdComponentTypings.get(props.params.component)
        getComponentFullInfo && getComponentFullInfo((componentFullInfo: RouterComponentsModel.ThirdComponentFullInfo)=> {
            this.props.application.event.emit(this.props.application.event.sceneLoaded)
            this.setState({
                componentFullInfo
            })
        })
    }

    render() {
        if (!this.state.componentFullInfo) {
            return null
        }

        // 解析后的定义文件
        const parsedTypings = parseDts(this.state.componentFullInfo.typings)

        return (
            <div className="_namespace">
                <pre>
                    <code>{this.state.componentFullInfo.typings}</code>
                </pre>
            </div>
        )
    }
}