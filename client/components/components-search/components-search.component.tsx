import * as React from 'react'
import * as typings from './components-search.type'
import {observer, inject} from 'mobx-react'
import {browserHistory} from '../../../utils/provider'
import components from '../../../components'

import AutoComplete from '../../../components/web-common/auto-complete/index'

import './components-search.scss'

@inject('application', 'event', 'editorAction', 'user') @observer
export default class ComponentsSearch extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const datas: Array<{
            label: string,
            key: string
        }> = []

        components.forEach(category=> {
            category.components.forEach(component=> {
                datas.push({
                    label: `${component.chinese} ${component.name} - ${category.chinese}`,
                    key: `${category.name}/${component.name}`
                })
            })
        })

        const opts = {
            datas: datas,
            placeholder: '搜索组件',
            parse: {
                text: 'label',
                value: 'key'
            },
            label: '',
            onSelect: (value: string)=> {
                browserHistory.push(`/components/${value}`)
            },
            autoFilter: true
        }

        return (
            <AutoComplete {...opts} style={{width:350}}/>
        )
    }
}