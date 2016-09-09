import * as React from 'react'
import * as typings from './component.type'
import {observer} from 'mobx-react'
import {Button, ButtonGroup} from '../../../../../components/web-common/button'
import * as ReactCopyToClipboard from 'react-copy-to-clipboard'
import Message from 'fit-message'
import * as config from '../../../../../config'
import FullComponentInfo from './full-component-info/full-component-info.component'
import {browserHistory} from '../../../../main.browser'

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
        const npmInstall = this.state.categoryInfo && this.state.categoryInfo.isPrivate ? `npm install ${config.privateGit}/${this.state.categoryInfo.name}-${this.state.componentInfo.name}/repository/archive.tar.gz?ref=v${this.state.componentFullInfo && this.state.componentFullInfo.packageJson && this.state.componentFullInfo.packageJson.version} --save` : `npm install ${this.state.categoryInfo.prefix}-${this.state.componentInfo.name} --save`

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