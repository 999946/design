import * as React from 'react'
import * as typings from './component.type'
import {observer} from 'mobx-react'
import componentsRouter from '../../../../../auto-create/components-router'
import packageJsons from '../../../../../auto-create/package-json'
import components from '../../../../../components'
import {Button, ButtonGroup} from 'fit-button'

import 'highlight.js/styles/github.css'
import 'highlight.js/lib/languages/typescript.js'
import './component.scss'

import Demo from './demo/demo.component'
import Document from './document/document.component'
import Dependence from './dependence/dependence.component'

@observer
export default class ComponentsCategoryComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.asyncGetComponents(this.props)
        this.asyncGetPackageJson(this.props)
        this.getComponentInfo(this.props)
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.initState()
        this.asyncGetComponents(nextProps)
        this.asyncGetPackageJson(nextProps)
        this.getComponentInfo(nextProps)
    }

    /**
     * 初始化 state
     */
    initState() {
        this.setState(new typings.State())
    }

    /**
     * 获取所有 demo 信息
     */
    asyncGetComponents(props: typings.PropsDefine) {
        const getComponentDemos = componentsRouter.get(`${props.params.category}/${props.params.component}`)

        getComponentDemos && getComponentDemos(null, (demos: any)=> {
            this.setState({
                demos
            })
        })
    }

    /**
     * 异步获取 package.json
     * @param props
     */
    asyncGetPackageJson(props: typings.PropsDefine) {
        const getPackageJson = packageJsons.get(`${props.params.category}/${props.params.component}`)
        getPackageJson && getPackageJson(null, (packageJson: any)=> {
            this.setState({
                packageJson: JSON.parse(packageJson)
            })
        })
    }

    /**
     * 获取这个组件的配置信息
     */
    getComponentInfo(props: typings.PropsDefine) {
        // 获取这个组件的信息
        const componentInfo = components.find(category=>category.name === props.params.category).components.find(component=>component.name === props.params.component)
        this.setState({
            componentInfo
        })
    }

    /**
     * 修改页面状态
     */
    handleChangeStatu(statu: typings.Statu) {
        this.setState({statu})
    }

    render() {
        let child: React.ReactElement<any>

        switch (this.state.statu) {
            case typings.Statu.DEMO:
                child = (
                    <Demo demos={this.state.demos}/>
                )
                break
            case typings.Statu.DOCUMENT:
                child = (
                    <Document/>
                )
                break
            case typings.Statu.DEPENDENCE:
                child = (
                    <Dependence packageJson={this.state.packageJson}/>
                )
                break
        }

        return (
            <div className="_namespace">
                <div className="component-title">
                    <div className="left">
                        <span className="component-name">{this.state.componentInfo.chinese}</span>
                        <span className="component-version">v{this.state.packageJson && this.state.packageJson.version}</span>
                    </div>
                    <div className="right">
                        <ButtonGroup>
                            <Button active={this.state.statu === typings.Statu.DEMO}
                                    onClick={this.handleChangeStatu.bind(this, typings.Statu.DEMO)}>演示</Button>
                            <Button active={this.state.statu === typings.Statu.DOCUMENT}
                                    onClick={this.handleChangeStatu.bind(this, typings.Statu.DOCUMENT)}>文档</Button>
                            <Button active={this.state.statu === typings.Statu.DEPENDENCE}
                                    onClick={this.handleChangeStatu.bind(this, typings.Statu.DEPENDENCE)}>依赖</Button>
                        </ButtonGroup>
                    </div>
                </div>

                {child}
            </div>
        )
    }
}