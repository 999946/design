import * as React from 'react'
import * as typings from './publish-web.type'
import {observer, inject} from 'mobx-react'
import handleBrowserCall from '../../../utils/handle-browser-call'
import './publish-web.scss'

import Scale from '../../../utils/scale'

import componentInfos from '../../../auto-create/component-infos'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class PublishWeb extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private GaeaWebComponents: any
    private GaeaPreview: any

    private scale: Scale

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
        this.scale = new Scale()
        document.getElementById('react-dom').style.backgroundColor = 'white'

        // 如果需要适配移动端
        if (this.props.location.query['fitInWeb'] === 'mobile') {
            this.scale.scale()
        }

        await this.getGaeaWebComponents()
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

    componentWillUnmount() {
        if (this.props.location.query['fitInWeb'] === 'mobile') {
            this.scale.unScale()
        }
        document.getElementById('react-dom').style.backgroundColor = null
    }

    render() {
        if (!this.state.isReady || this.state.value === '') {
            return null
        }

        return React.createElement(this.GaeaPreview, {
            baseComponents: this.GaeaWebComponents,
            value: this.state.value,
            onCall: handleBrowserCall
        })
    }
}