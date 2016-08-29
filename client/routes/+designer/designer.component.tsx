import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './designer.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import Gaea from 'fit-gaea'
import GaeaNativeComponents from 'fit-gaea-native-components'
import GaeaWebComponents from 'fit-gaea-web-components'

import Navbar from '../../../components/wefan/navbar/navbar.component'
import ResourceCard from '../../../components/wefan/resource-card/resource-card.component'

import './designer.scss'

const customComponents = [Navbar, ResourceCard]

@observer
export default class Designer extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
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
                      height={window.innerHeight-41}/>
            </div>
        )
    }
}