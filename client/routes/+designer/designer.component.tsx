import * as React from 'react'
import * as typings from './designer.type'
import {observer} from 'mobx-react'
import Gaea from 'fit-gaea'
import GaeaNativeComponents from 'fit-gaea-native-components'
import GaeaWebComponents from 'fit-gaea-web-components'
import * as request from 'superagent'
import Message from 'fit-message'

import Navbar from '../../../components/wefan/navbar/navbar/navbar.component'
import ResourceCard from '../../../components/wefan/resource-card/resource-card/resource-card.component'

import './designer.scss'

const customComponents = [Navbar, ResourceCard]

@observer
export default class Designer extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        request.get('/rn/designer/get').end((err, res)=> {
            const body = res.body as CommonModel.Response<DesignerModel.SaveResponse>
            this.setState({
                value: decodeURIComponent(body.data.content)
            })
        })
    }

    /**
     * 触发保存
     */
    handleSave(componentsInfo: any) {
        request.post('/rn/designer/set').type('form').send({
            content: encodeURIComponent(JSON.stringify(componentsInfo))
        } as DesignerModel.SaveRequest).end((err, res)=> {
            if (res.body.errno === 0) {
                Message.success('保存成功')
            }
        })
    }

    render() {
        // 如果没有拉到数据, 就不显示编辑器
        if (!this.state.value) {
            return null
        }

        // 基础组件类型
        let baseComponents: Array<any>
        switch (this.props.location.query['type']) {
            case 'web':
                baseComponents = GaeaWebComponents
                break
            case 'native':
            default:
                baseComponents = GaeaNativeComponents
        }

        return (
            <div className="_namespace"
                 style={{backgroundColor:'white'}}>
                <Gaea customComponents={customComponents}
                      baseComponents={baseComponents}
                      onSave={this.handleSave.bind(this)}
                      defaultValue={JSON.parse(this.state.value)}
                      height={window.innerHeight-41}/>
            </div>
        )
    }
}