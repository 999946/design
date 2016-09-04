import * as React from 'react'
import * as typings from './component.type'
import {observer} from 'mobx-react'
import componentInfos from '../../../../../auto-create/component-infos'
import components from '../../../../../components'
import {Button, ButtonGroup} from 'fit-button'
import * as ReactCopyToClipboard from 'react-copy-to-clipboard'
import Message from 'fit-message'
import * as config from '../../../../../config'

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
        this.asyncGetComponentInfo(this.props)
        this.getComponentInfo(this.props)
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.initState()
        this.asyncGetComponentInfo(nextProps)
        this.getComponentInfo(nextProps)
    }

    /**
     * 初始化 state
     */
    initState() {
        this.setState(new typings.State())
    }

    /**
     * 异步获取组件所有信息
     */
    asyncGetComponentInfo(props: typings.PropsDefine) {
        const getComponentFullInfo = componentInfos.get(`${props.params.category}/${props.params.component}`)
        getComponentFullInfo && getComponentFullInfo(null, (componentFullInfo: typings.ComponentFullInfo)=> {
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

    /**
     * 修改页面状态
     */
    handleChangeStatu(statu: typings.Statu) {
        this.setState({statu})
    }

    /**
     * 复制了安装地址
     */
    handleCopy() {
        Message.success('安装地址已复制至剪贴板')
    }

    render() {
        let child: React.ReactElement<any>

        switch (this.state.statu) {
            case typings.Statu.DEMO:
                child = (
                    <Demo demos={this.state.componentFullInfo && this.state.componentFullInfo.demos}
                          categoryInfo={this.state.categoryInfo}
                          componentInfo={this.state.componentInfo}/>
                )
                break
            case typings.Statu.DOCUMENT:
                child = (
                    <Document documents={this.state.componentFullInfo && this.state.componentFullInfo.documents}
                              categoryInfo={this.state.categoryInfo}
                              componentInfo={this.state.componentInfo}/>
                )
                break
            case typings.Statu.DEPENDENCE:
                child = (
                    <Dependence packageJson={this.state.componentFullInfo && this.state.componentFullInfo.packageJson}/>
                )
                break
        }

        // npm install
        const npmInstall = this.state.categoryInfo && this.state.categoryInfo.isPrivate ? `${config.privateGit}/${this.state.categoryInfo.prefix}-${this.state.componentInfo.name}/repository/archive.tar.gz?ref=${this.state.componentFullInfo && this.state.componentFullInfo.packageJson.version} --save` : `npm install ${config.publicGit}/${this.state.categoryInfo.prefix}-${this.state.componentInfo.name}@${this.state.componentFullInfo && this.state.componentFullInfo.packageJson.version} --save`

        return (
            <div className="_namespace">
                <div className="component-title">
                    <div className="left">
                        <span className="component-name">{this.state.componentInfo.chinese}</span>
                        <span className="component-version">v{this.state.componentFullInfo && this.state.componentFullInfo.packageJson.version}</span>
                    </div>
                    <div className="right">
                        <input readOnly={true}
                               value={npmInstall}
                               className="component-install"/>
                        <ReactCopyToClipboard text={npmInstall}
                                              onCopy={this.handleCopy.bind(this)}>
                            <Button className="copy"><i className="fa fa-copy"/></Button>
                        </ReactCopyToClipboard>
                        <ButtonGroup className="switch-group">
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