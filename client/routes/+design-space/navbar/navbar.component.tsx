import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './navbar.type'
import {observer, inject} from 'mobx-react'
import {browserHistory} from '../../../../utils/provider'

import Modal from '../../../../components/web-common/modal/index'
import Button from '../../../../components/web-common/button/index'
import {autoBindMethod} from '../../../../components/common/auto-bind/index'
import Input from '../../../../components/web-common/input/index'
import {Radio, RadioGroup} from '../../../../components/web-common/radio/index'

import './navbar.scss'

/**
 * 创建应用输入框长度验证
 */
const nameInputValidate = (value: string, validator: any): any => {
    if (!validator.notEmpty(value)) {
        return {
            ok: false,
            errorMessage: '标题不能为空'
        }
    }

    if (!validator.len(value, 1, 20)) {
        return {
            ok: false,
            errorMessage: '标题长度 1-20'
        }
    }

    return {ok: true}
}

/**
 * 应用描述验证
 */
const introInputValidate = (value: string, validator: any): any => {
    if (!validator.len(value, 1, 256)) {
        return {
            ok: false,
            errorMessage: '描述长度 0-256'
        }
    }

    return {ok: true}
}

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class Navbar extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
    }

    @autoBindMethod handleShowModal(type: string) {
        this.setState({
            show: true,
            createType: type
        })
    }

    @autoBindMethod
    async handleOk() {
        this.setState({
            show: false
        })

        const result = await this.props.editorAction.createEditor({
            app_name: this.state.createName,
            app_intro: this.state.createIntro,
            access_level: this.state.accessLevel === 'public' ? 2 : 1,
            app_type: this.state.createType === 'web' ? 1 : 2
        })

        if (result !== null) {
            // 创建成功会返回非 null 信息
            browserHistory.push(`/design/editor/${result.app_id}?type=${this.state.createType}`)
        }
    }

    @autoBindMethod handleCancel() {
        this.setState({
            show: false
        })
    }

    @autoBindMethod handleTitleChange(value: string) {
        this.setState({
            createName: value
        })
    }

    @autoBindMethod handleIntroChange(value: string) {
        this.setState({
            createIntro: value
        })
    }

    @autoBindMethod handleChangeAccessLevel(level: string) {
        this.setState({
            accessLevel: level
        })
    }

    render() {
        return (
            <div className="_namespace">
                <div className="left">
                    <span className="navbar-title">工作台</span>
                </div>

                <div className="right">
                    <Button type="primary"
                            onClick={this.handleShowModal.bind(this, 'web')}>+ web 应用</Button>

                    <Button type="primary"
                            className="second-designer-jump-button"
                            onClick={this.handleShowModal.bind(this, 'native')}>+ native 应用</Button>
                </div>

                <Modal show={this.state.show}
                       onOk={this.handleOk}
                       title={`创建 ${this.state.createType} 应用`}
                       onCancel={this.handleCancel}>
                    <Input label="应用名称"
                           validateMiddleware={nameInputValidate}
                           onChange={this.handleTitleChange}/>
                    <Input label="应用描述"
                           validateMiddleware={introInputValidate}
                           onChange={this.handleIntroChange}/>
                    <RadioGroup value={this.state.accessLevel}
                                style={{marginTop:20}}
                                onChange={this.handleChangeAccessLevel}>
                        <Radio value="public">公有</Radio>
                        <Radio value="private">私有</Radio>
                    </RadioGroup>
                </Modal>
            </div>
        )
    }
}