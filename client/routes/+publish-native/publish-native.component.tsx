import * as React from 'react'
import * as typings from './publish-native.type'
import {observer, inject} from 'mobx-react'
import handleBrowserCall from '../../../utils/handle-browser-call'
import './publish-native.scss'

import Scale from '../../../utils/scale'

import componentInfos from '../../../auto-create/component-infos'

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class PublishNative extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private GaeaNativeComponents: any
    private GaeaPreview: any
    private CustomComponents: any

    private scale: Scale

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
        this.scale = new Scale()
        this.scale.scale()
        document.getElementById('react-dom').style.height = '100%'
        document.getElementById('react-dom').style.backgroundColor = 'white'

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

    componentWillUnmount() {
        this.scale.unScale()
        document.getElementById('react-dom').style.height = null
        document.getElementById('react-dom').style.backgroundColor = null
    }

    render() {
        if (!this.state.isReady || this.state.value === '') {
            return null
        }

        return React.createElement(this.GaeaPreview, {
            baseComponents: this.GaeaNativeComponents,
            customComponents: this.CustomComponents,
            value: this.state.value,
            onCall: handleBrowserCall
        })
    }
}