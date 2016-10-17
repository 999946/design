import * as React from 'react'
import * as typings from './design-space.type'
import {observer, inject} from 'mobx-react'
import {browserHistory} from '../../../utils/provider'

import Modal from '../../../components/web-common/modal/index'
import Tooltip from '../../../components/web-common/tooltip/index'
import {autoBindMethod} from '../../../components/common/auto-bind/index'

import Navbar from './navbar/navbar.component'

import './design-space.scss'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class DesignSpace extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
        this.props.editorAction.getSelfEditorList()
    }

    @autoBindMethod handleJump(path: string) {
        browserHistory.push(path)
    }

    @autoBindMethod handleJumpEditor(appId: string, type: string) {
        browserHistory.push(`/design/${appId}?type=${type === '1' ? 'web' : 'native'}`)
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

    render() {
        const EditContainerList = this.props.editor.myEditList.map((editor, index)=> {
            return (
                <div className="app-container"
                     key={index}>
                    <div className="image"
                         onClick={this.handleJumpEditor.bind(this, editor.app_id, editor.app_type)}></div>
                    <div className="content-container">
                        <div className="title">{editor.app_name}</div>
                        {editor.active_ver !== '' &&
                        <Tooltip title="打开网页版">
                            <i onClick={this.handleJump.bind(this ,`/${editor.app_type==='1'?'web':'native'}/${editor.app_id}`)}
                               className="fa fa-internet-explorer operate-button"/>
                        </Tooltip>
                        }
                    </div>

                    <div className="absolute-layout">
                        <div className="header-container">
                            <div className="left"></div>
                            <div className="right"
                                 onClick={this.handleShowDeleteModal.bind(this, editor)}>
                                <Tooltip title="删除此应用">
                                    <i className="fa fa-trash-o operate-button"/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="_namespace">
                <Navbar/>
                <div className="edit-list-container">
                    {EditContainerList}
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