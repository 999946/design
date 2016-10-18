import * as React from 'react'
import * as typings from './component.type'
import {observer} from 'mobx-react'
import {Button, ButtonGroup} from '../../../../../components/web-common/button/index'
import * as ReactCopyToClipboard from 'react-copy-to-clipboard'
import Message from '../../../../../components/web-common/message/index'
import FullComponentInfo from './full-component-info/full-component-info.component'
import {browserHistory} from '../../../../../utils/provider'
import * as componentHelper from '../../../../../scripts/manage/utils/component-helper'
import * as config from '../../../../../config'

import 'highlight.js/styles/github.css'
import 'highlight.js/lib/languages/typescript.js'
import './component.scss'

import Tooltip from '../../../../../components/web-common/tooltip'

@observer
export default class ComponentsCategoryComponent extends FullComponentInfo <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    /**
     * 复制了安装地址
     */
    handleCopy() {
        Message.success('安装地址已复制至剪贴板')
    }

    /**
     * 跳转
     */
    handleJump(categoryName: string) {
        browserHistory.push(`/components/${this.state.categoryInfo.name}/${this.state.componentInfo.name}/${categoryName}`)
    }

    render() {
        // npm install 语句
        const gitSource = this.state.categoryInfo && componentHelper.getGit(this.state.categoryInfo.name, this.state.componentInfo.name, true)
        const npmSource = this.state.categoryInfo && componentHelper.getPackageName(this.state.categoryInfo.name, this.state.componentInfo.name)
        const npmInstall = this.state.categoryInfo && this.state.categoryInfo.isPrivate ? `npm install ${gitSource}/repository/archive.tar.gz?ref=v${this.state.componentFullInfo && this.state.componentFullInfo.packageJson && this.state.componentFullInfo.packageJson.version} --save` : `npm install ${npmSource} --save`

        // 适用于 web
        let ForWeb: React.ReactElement<any> = null
        if (this.state.componentInfo.isWeb) {
            ForWeb = (
                <Tooltip title="运行在浏览器">
                <span className="support">
                    <i className="fa fa-internet-explorer"
                       style={{fontSize:11}}/>
                </span>
                </Tooltip>
            )
        }

        // 适用于 android
        let ForAndroid: React.ReactElement<any> = null
        if (this.state.componentInfo.isAndroid) {
            ForAndroid = (
                <Tooltip title="运行在 Android Native">
                <span className="support">
                    <i className="fa fa-android"/>
                </span>
                </Tooltip>
            )
        }

        // 适用于 ios
        let ForIos: React.ReactElement<any> = null
        if (this.state.componentInfo.isIos) {
            ForIos = (
                <Tooltip title="运行在 IOS native">
                <span className="support">
                    <i className="fa fa-apple"/>
                </span>
                </Tooltip>
            )
        }

        return (
            <div className="_namespace">
                <div className="component-title">
                    <div className="left">
                        <span className="component-name">{this.state.componentInfo.chinese}</span>
                        <span className="component-version">{this.state.componentFullInfo && this.state.componentFullInfo.packageJson && `v` + this.state.componentFullInfo.packageJson.version}</span>
                        {ForWeb}
                        {ForIos}
                        {ForAndroid}

                        <a target="_blank"
                           href={`${componentHelper.getGit(this.state.categoryInfo.name, this.state.componentInfo.name, true)}`}
                           className="git-container">
                            {this.state.categoryInfo.isPrivate ?
                                <i className="fa fa-git"/>:<i className="fa fa-github"/>}
                        </a>
                    </div>
                    <div className="right">
                        {this.state.componentFullInfo && this.state.componentFullInfo.packageJson &&
                        <div className="component-install-container">
                            <input readOnly={true}
                                   value={npmInstall}
                                   className="component-install"/>
                            <ReactCopyToClipboard text={npmInstall}
                                                  onCopy={this.handleCopy.bind(this)}>
                                <Button className="copy">
                                    <i className="fa fa-copy"/>
                                </Button>
                            </ReactCopyToClipboard>
                        </div>
                        }
                        <ButtonGroup className="switch-group">
                            <Button active={!this.props.routes[4].path || this.props.routes[4].path === 'demo'}
                                    onClick={this.handleJump.bind(this, 'demo')}>演示</Button>
                            <Button active={this.props.routes[4] && this.props.routes[4].path === 'document'}
                                    onClick={this.handleJump.bind(this, 'document')}>文档</Button>
                            <Button active={this.props.routes[4] && this.props.routes[4].path === 'dependence'}
                                    onClick={this.handleJump.bind(this, 'dependence')}>依赖</Button>
                        </ButtonGroup>
                    </div>
                </div>

                {this.props.children}
            </div>
        )
    }
}