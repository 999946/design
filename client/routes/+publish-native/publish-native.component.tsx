import * as React from 'react'
import * as typings from './publish-native.type'
import {observer, inject} from 'mobx-react'
import './publish-native.scss'

import componentInfos from '../../../auto-create/component-infos'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class PublishNative extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private GaeaNativeComponents: any
    private GaeaPreview: any
    private CustomComponents: any

    private getGaeaNativeComponents = ()=> {
        return new Promise<string>((resolve, reject)=> {
            const getMessageComponentFullInfo = componentInfos.get('editor/gaea-native-components')
            getMessageComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
                this.GaeaNativeComponents = componentFullInfo.main.default
                resolve('finish')
            })
        })
    }
    private getGaeaWefanComponents = ()=> {
        return new Promise<string>((resolve, reject)=> {
            const getWefanComponentFullInfo = componentInfos.get('wefan/gaea-components')
            getWefanComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
                this.CustomComponents = componentFullInfo.main.default
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
        await this.getGaeaNativeComponents()
        await this.getGaeaWefanComponents()
        await this.getGaeaPreview()
        const result = await this.props.editorAction.getPublishActiveContent(this.props.params.id)

        document.title = result.app_name

        this.setState({
            isReady: true,
            value: result.content
        }, ()=> {
            this.props.event.emit(this.props.event.sceneLoaded)
        })
    }

    render() {
        if (!this.state.isReady || this.state.value === '') {
            return null
        }

        return React.createElement(this.GaeaPreview, {
            baseComponents: this.GaeaNativeComponents,
            customComponents: this.CustomComponents,
            value: this.state.value
        })
    }
}