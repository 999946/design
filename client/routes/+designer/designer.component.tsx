import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './designer.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import Gaea from 'fit-gaea'
import GaeaNativeComponents from 'fit-gaea-native-components'

import Navbar from '../../../components/wefan/navbar/navbar.component'
import ResourceCard from '../../../components/wefan/resource-card/resource-card.component'

const customComponents = [Navbar, ResourceCard]

@observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Gaea customComponents={customComponents}
                  baseComponents={GaeaNativeComponents}/>
        )
    }
}