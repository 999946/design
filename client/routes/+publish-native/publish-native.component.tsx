import * as React from 'react'
import * as typings from './publish-native.type'
import {observer, inject} from 'mobx-react'
import './publish-native.scss'

import componentInfos from '../../../auto-create/component-infos'

@inject('application') @observer
export default class PublishNative extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private GaeaNativeComponents: any
    private GaeaPreview: any

    private getGaeaNativeComponents = new Promise<string>((resolve, reject)=> {
        const getMessageComponentFullInfo = componentInfos.get('editor/gaea-native-components')
        getMessageComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.GaeaNativeComponents = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaPreview = new Promise<string>((resolve, reject)=> {
        const getGaeaComponentFullInfo = componentInfos.get('editor/gaea-preview')
        getGaeaComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.GaeaPreview = componentFullInfo.main.default
            resolve('finish')
        })
    })

    componentWillMount() {
        Promise.all([
            this.GaeaNativeComponents,
            this.getGaeaPreview
        ]).then(()=> {
            this.setState({
                isReady: true
            }, ()=> {
                this.props.application.event.emit(this.props.application.event.sceneLoaded)
            })
        }).catch(()=> {

        })
    }

    render() {
        if (!this.state.isReady) {
            return null
        }

        return React.createElement(this.GaeaPreview, {
            baseComponents: this.GaeaNativeComponents,
            value: this.state.value
        })
    }
}