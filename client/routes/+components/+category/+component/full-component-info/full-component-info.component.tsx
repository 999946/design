import * as React from 'react'
import * as typings from './full-component-info.type'
import componentInfos from '../../../../../../auto-create/component-infos'
import components from '../../../../../../components'
import {observer, inject} from 'mobx-react'

/**
 * 获得当前路由下组件完整信息
 */
class FullComponentInfo <P, S> extends React.Component <typings.PropsDefine | P, typings.StateDefine | S> {
    componentWillMount() {
        this.asyncGetComponentInfo(this.props)
        this.getComponentInfo(this.props)
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.asyncGetComponentInfo(nextProps)
        this.getComponentInfo(nextProps)
    }

    /**
     * 异步获取组件所有信息
     */
    asyncGetComponentInfo(props: typings.PropsDefine) {
        const getComponentFullInfo = componentInfos.get(`${props.params.category}/${props.params.component}`)
        getComponentFullInfo && getComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.setState({
                componentFullInfo
            })
        })
    }

    /**
     * 获取这个组件的配置信息
     */
    getComponentInfo(props: typings.PropsDefine) {
        // 获取这个组件的信息
        const categoryInfo = components.find(category=>category.name === props.params.category)
        const componentInfo = categoryInfo.components.find(component=>component.name === props.params.component)
        this.setState({
            componentInfo,
            categoryInfo
        })
    }
}

export default (inject('application')(FullComponentInfo) as any).wrappedComponent