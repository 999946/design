import * as React from 'react'
import * as typings from './component.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import componentsRouter from '../../../../../auto-create/components-router'

import Bluekit from 'fit-bluekit'

import './component.scss'

@observer
export default class ComponentsCategoryComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.asyncGetComponents(this.props)
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.asyncGetComponents(nextProps)
    }

    asyncGetComponents(props: typings.PropsDefine) {
        const getComponentDemos = componentsRouter.get(`${props.params.category}/${props.params.component}`)

        getComponentDemos && getComponentDemos(null, (demos: any)=> {
            this.setState({
                childs: demos
            })
        })
    }

    render() {
        const Demos = this.state.childs.map((demo, index)=> {
            const info = {
                title: demo.Class.title,
                description: demo.Class.description,
                codeSource: demo.code,
                codeInstance: (
                    <demo.Class/>
                )
            }

            return (
                <div key={index}
                     className="demo-item">
                    <Bluekit {...info}/>
                </div>
            )
        })

        return (
            <div className="_namespace">
                {Demos}
            </div>
        )
    }
}