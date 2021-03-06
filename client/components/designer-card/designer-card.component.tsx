import * as React from 'react'
import * as typings from './designer-card.type'
import {observer, inject} from 'mobx-react'
import {browserHistory} from '../../../utils/provider'
import * as LZString from 'lz-string'

import Modal from '../../../components/web-common/modal/index'
import Tooltip from '../../../components/web-common/tooltip/index'
import {autoBindMethod} from '../../../components/common/auto-bind/index'
import * as QRCode from 'qrcode.react'

import './designer-card.scss'

@inject('application', 'event', 'editorAction', 'user') @observer
export default class DesignerCard extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    @autoBindMethod handleJump(path: string) {
        browserHistory.push(path)
    }

    @autoBindMethod handleJumpEditor(appId: string, type: string, width: number) {
        if (this.props.isExplore) {
            browserHistory.push(`/design/editor/${appId}?type=${type === '1' ? 'web' : 'native'}&isExplore=1`)
        } else {
            browserHistory.push(`/design/editor/${appId}?type=${type === '1' ? 'web' : 'native'}`)
        }
    }

    @autoBindMethod handleShowDeleteModal(info: Http.EditorResponse) {
        this.setState({
            showDeleteModal: true,
            prepareDeleteInfo: info
        })
    }

    @autoBindMethod
    async handleDeleteOk() {
        await this.props.editorAction.del(this.state.prepareDeleteInfo.app_id)
        this.setState({
            showDeleteModal: false
        })
    }

    @autoBindMethod handleDeleteCancel() {
        this.setState({
            showDeleteModal: false
        })
    }

    /**
     * 获取跳转网页的 url
     */
    getWebUrl() {
        const appType = this.props.info.app_type === '1' ? 'web' : 'native'
        const settings = JSON.parse(LZString.decompressFromBase64(this.props.info.settings)) as {
            [mapUniqueKey: string]: any
        }
        return `/${appType}/${this.props.info.app_id}?_fitInWeb=${settings['fitInWeb'] || 'mobile'}&_width=${settings['viewportWidth'] || 400}`
    }

    @autoBindMethod handleJumpPublish() {
        browserHistory.push(this.getWebUrl())
    }

    @autoBindMethod handleRenderTitle() {
        return (
            <div>
                <div>
                    <QRCode value={`http://next.baidu.com${this.getWebUrl()}`}/>
                </div>
                <div>
                    打开网页版
                </div>
            </div>
        )
    }

    render() {
        // 是不是自己的应用
        const isMine = this.props.user.currentUser.user_id === Number(this.props.info.user_id)

        // 是自己或者是管理员
        const isMineOrManager = isMine || this.props.user.currentUser.is_admin

        return (
            <div className="_namespace">
                <div className="image"
                     onClick={this.handleJumpEditor.bind(this, this.props.info.app_id, this.props.info.app_type)}></div>
                <div className="content-container">
                    <div className="title">
                        {this.props.info.app_name}
                        <div className="title-tag">{this.props.info.app_type === '1' ? 'web' : 'native'}</div>
                    </div>

                    <div className="right-info">
                        {Number(this.props.info.access_level) === 1 &&
                        <div className="tag private">私有</div>
                        }
                        {Number(this.props.info.access_level) === 2 &&
                        <div className="tag public">公有</div>
                        }

                        {this.props.info.active_ver &&
                        <Tooltip titleRender={this.handleRenderTitle}>
                            <i onClick={this.handleJumpPublish}
                               className="fa fa-internet-explorer operate-button"/>
                        </Tooltip>
                        }
                    </div>
                </div>

                <div className="description">{this.props.info.app_intro}</div>

                <div className="absolute-layout">
                    <div className="header-container">
                        <div className="left"></div>
                        <div className="right"
                             onClick={this.handleShowDeleteModal.bind(this, this.props.info)}>
                            {isMineOrManager &&
                            <Tooltip title="删除此应用">
                                <i className="fa fa-trash-o operate-button"/>
                            </Tooltip>
                            }
                        </div>
                    </div>
                </div>

                <Modal show={this.state.showDeleteModal}
                       title={`删除应用`}
                       onOk={this.handleDeleteOk}
                       onCancel={this.handleDeleteCancel}>
                    <p>确认删除应用：{this.state.prepareDeleteInfo.app_name} 吗？</p>
                </Modal>
            </div>
        )
    }
}