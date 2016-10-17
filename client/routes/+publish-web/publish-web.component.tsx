import * as React from 'react'
import * as typings from './publish-web.type'
import {observer, inject} from 'mobx-react'
import './publish-web.scss'

import componentInfos from '../../../auto-create/component-infos'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class PublishWeb extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private GaeaWebComponents: any
    private GaeaPreview: any

    private getGaeaWebComponents = ()=> {
        return new Promise<string>((resolve, reject)=> {
            const getMessageComponentFullInfo = componentInfos.get('editor/gaea-web-components')
            getMessageComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
                this.GaeaWebComponents = componentFullInfo.main.default
                resolve('finish')
            })
        })
    }
    private getGaeaPreview = ()=> {
        return new Promise<string>((resolve, reject)=> {
            const getGaeaComponentFullInfo = componentInfos.get('editor/gaea-preview')
            getGaeaComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
                this.GaeaPreview = componentFullInfo.main.default
                resolve('finish')
            })
        })
    }

    async componentWillMount() {
        await this.getGaeaWebComponents()
        await this.getGaeaPreview()
        const result = await this.props.editorAction.getPublishActiveContent(this.props.params.id)

        this.setState({
            isReady: true,
            value: result.content
        }, ()=> {
            this.props.event.emit(this.props.event.sceneLoaded)
        })
    }

    render() {
        if (!this.state.isReady) {
            return null
        }

        return React.createElement(this.GaeaPreview, {
            baseComponents: this.GaeaWebComponents,
            value: this.state.value
        })
    }
}