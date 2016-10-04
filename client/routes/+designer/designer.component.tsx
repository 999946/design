import * as React from 'react'
import * as typings from './designer.type'
import {observer, inject} from 'mobx-react'
import * as request from 'superagent'

import Navbar from '../../../components/wefan/navbar/navbar/navbar.component'
import ResourceCard from '../../../components/wefan/resource-card/resource-card/resource-card.component'
import componentInfos from '../../../auto-create/component-infos'

import './designer.scss'

const nativeCustomComponents = [Navbar, ResourceCard]

@inject('application') @observer
export default class Designer extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private Gaea: any
    private GaeaNativeComponents: any
    private GaeaWebComponents: any
    private Message: any

    /**
     * 获取页面信息
     */
    private getPageInfo = new Promise<string>((resolve, reject) => {
        request.get('/rn/designer/get').end((err, res)=> {
            const body = res.body as CommonModel.Response<DesignerModel.SaveResponse>
            this.props.application.event.emit(this.props.application.event.sceneLoaded)
            this.setState({
                value: decodeURIComponent(body.data.content)
            })
            resolve('getPageInfoFinish')
        })
    })

    /**
     * 获取各组件信息
     */
    private getMessageComponentFullInfo = new Promise<string>((resolve, reject)=> {
        const getMessageComponentFullInfo = componentInfos.get('web-common/message')
        getMessageComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.Message = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaComponentFullInfo = new Promise<string>((resolve, reject)=> {
        const getGaeaComponentFullInfo = componentInfos.get('editor/gaea-editor')
        getGaeaComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.Gaea = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaWebComponentFullInfo = new Promise<string>((resolve, reject)=> {
        const getGaeaWebComponentFullInfo = componentInfos.get('editor/gaea-web-components')
        getGaeaWebComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.GaeaWebComponents = componentFullInfo.main.default
            resolve('finish')
        })
    })
    private getGaeaNativeComponentFullInfo = new Promise<string>((resolve, reject)=> {
        const getGaeaNativeComponentFullInfo = componentInfos.get('editor/gaea-native-components')
        getGaeaNativeComponentFullInfo((componentFullInfo: RouterComponentsModel.ComponentFullInfo)=> {
            this.GaeaNativeComponents = componentFullInfo.main.default
            resolve('finish')
        })
    })

    componentWillMount() {
        Promise.all([
            this.getPageInfo,
            this.getGaeaComponentFullInfo,
            this.getGaeaWebComponentFullInfo,
            this.getGaeaNativeComponentFullInfo,
            this.getMessageComponentFullInfo
        ]).then(()=> {
            this.setState({
                isReady: true
            })
        }).catch(()=> {

        })
    }

    /**
     * 触发保存
     */
    handleSave(componentsInfo: any) {
        request.post('/rn/designer/set').type('form').send({
            content: encodeURIComponent(JSON.stringify(componentsInfo))
        } as DesignerModel.SaveRequest).end((err, res)=> {
            if (res && res.body.errno === 0) {
                this.Message.success('保存成功')
            }
        })
    }

    render() {
        if (!this.state.isReady) {
            return null
        }

        // 基础组件类型
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
                    customComponents: this.props.location.query['type'] === 'native' ? nativeCustomComponents : [],
                    baseComponents: baseComponents,
                    onSave: this.handleSave.bind(this),
                    isReactNative: this.props.location.query['type'] === 'native',
                    height: window.innerHeight - 41
                })}
            </div>
        )
    }
}