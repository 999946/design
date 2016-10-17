import * as React from 'react'
import * as typings from './designer.type'
import {observer, inject} from 'mobx-react'

import componentInfos from '../../../auto-create/component-infos'

import './designer.scss'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class Designer extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private Gaea: any
    private GaeaNativeComponents: any
    private GaeaWebComponents: any
    private Message: any
    private customComponents: any = []

    /**
     * 获取各组件信息
     */
    private getMessageComponentFullInfo = new Promise<string>((resolve, reject) => {
        const getMessageComponentFullInfo = componentInfos.get('web-common/message')
        getMessageComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo) => {
            this.Message = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaComponentFullInfo = new Promise<string>((resolve, reject) => {
        const getGaeaComponentFullInfo = componentInfos.get('editor/gaea-editor')
        getGaeaComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo) => {
            this.Gaea = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaWebComponentFullInfo = new Promise<string>((resolve, reject) => {
        const getGaeaWebComponentFullInfo = componentInfos.get('editor/gaea-web-components')
        getGaeaWebComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo) => {
            this.GaeaWebComponents = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaNativeComponentFullInfo = new Promise<string>((resolve, reject) => {
        const getGaeaNativeComponentFullInfo = componentInfos.get('editor/gaea-native-components')
        getGaeaNativeComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo) => {
            this.GaeaNativeComponents = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaCustomComponentFullInfo = new Promise<string>((resolve, reject) => {
        if (this.props.location.query['type'] === 'native') {
            const getGaeaCustomComponentFullInfo = componentInfos.get('wefan/gaea-components')
            getGaeaCustomComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo) => {
                this.customComponents = componentFullInfo.main.default
                resolve('finish')
            })
        } else {
            resolve('finish')
        }
    })

    /**
     * 获取当前编辑器信息
     */
    async getCurrentEditorInfo() {
        await this.props.editorAction.getEditorById(this.props.params.id)
        await this.props.editorAction.getEditorContentById(this.props.params.id)
        //await* [this.props.editorAction.getEditorById(this.props.params.id), this.props.editorAction.getEditorContentById(this.props.params.id)]
        this.setState({
            isReady: true
        })
    }

    componentWillMount() {
        Promise.all([
            this.getGaeaComponentFullInfo,
            this.getGaeaWebComponentFullInfo,
            this.getGaeaNativeComponentFullInfo,
            this.getMessageComponentFullInfo,
            this.getGaeaCustomComponentFullInfo
        ]).then(() => {
            this.props.event.emit(this.props.event.sceneLoaded)
            this.getCurrentEditorInfo()
        }).catch(() => {

        })
    }

    /**
     * 触发保存
     */
    async handleSave(value: string, setting: string) {
        await this.props.editorAction.saveContent(this.props.params.id, value)
        await this.props.editorAction.saveInfo(this.props.params.id, setting)
        this.Message.success('保存成功')
    }

    /**
     * 触发获取发布的版本列表
     */
    async handleGetPublishList(page: number, callback: Function) {
        const publishList = await this.props.editorAction.getPublishVersionList(this.props.params.id, page)
        callback(publishList.list)
    }

    /**
     * 触发发布
     */
    async handlePublish(versionInfo: FitGaea.GetPublishListResult, callback: Function) {
        await this.props.editorAction.publish(this.props.params.id, versionInfo)
        callback()
    }

    /**
     * 触发切换版本
     */
    async handleSwitchVersion(version: string, callback: Function) {
        await this.props.editorAction.active(this.props.params.id, version)
        // 再获取那个版本信息
        const result = await this.props.editorAction.getEditorContentById(this.props.params.id, version)
        callback(result.content)
    }

    /**
     * 触发版本预览
     */
    async handlePreviewVersion(version: string, callback: Function) {
        const result = await this.props.editorAction.getEditorContentById(this.props.params.id, version)
        callback(result.content)
    }

    render() {
        if (!this.state.isReady) {
            return null
        }

        // 获取编辑信息
        const editorInfo = this.props.editor.editorInfos.get(this.props.params.id)
        const editorContent = this.props.editor.editorContents.get(this.props.params.id)

        // 根据不同类型，给不同的基础组件
        let baseComponents: Array<any>
        switch (this.props.location.query['type']) {
            case 'web':
                baseComponents = this.GaeaWebComponents
                break
            case 'native':
            default:
                baseComponents = this.GaeaNativeComponents
        }

        return (
            <div className="_namespace">
                {React.createElement(this.Gaea, {
                    customComponents: this.customComponents,
                    baseComponents: baseComponents,
                    onSave: this.handleSave.bind(this),
                    defaultValue: editorContent && editorContent.content,
                    defaultSetting: editorInfo.settings,
                    isReactNative: this.props.location.query['type'] === 'native',
                    height: window.innerHeight - 41,
                    currentVersion: editorInfo.active_ver,
                    onGetPublishList: this.handleGetPublishList.bind(this),
                    onPublish: this.handlePublish.bind(this),
                    onSwitchVersion: this.handleSwitchVersion.bind(this),
                    onPreviewVersion: this.handlePreviewVersion.bind(this)
                })}
            </div>
        )
    }
}