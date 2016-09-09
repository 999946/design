import * as React from 'react'
import * as typings from './dependence.type'
import FullComponentInfo from '../full-component-info/full-component-info.component'
import components from '../../../../../../components'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import './dependence.scss'

@observer
export default class Dependence extends FullComponentInfo <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private dependenceMap: Map<string,{
        category: Components.Category
        component: Components.ComponentConfig
    }> = new Map()

    componentWillMount() {
        super.componentWillMount()

        // 解析出当前所有组件的依赖 map
        components.forEach(category=> {
            category.components.forEach(component=> {
                this.dependenceMap.set(`${category.prefix}-${component.name}`, {
                    category,
                    component
                })
            })
        })
    }

    /**
     * 渲染依赖文字，会自动解析出链接
     */
    renderDependence(dependence: string) {
        // 尝试从自己的组件中寻找
        const selfDependence = this.dependenceMap.get(dependence)
        if (selfDependence) {
            return (
                <Link className="dependence-link" to={`/components/${selfDependence.category.name}/${selfDependence.component.name}/dependence`}>{dependence}</Link>
            )
        } else {
            // 是个 npm 包
            return (
                <a className="dependence-link" href={`https://www.npmjs.com/package/${dependence}`}
                   target="_blank">{dependence}</a>
            )
        }
    }

    render() {
        if (!this.state.componentFullInfo) {
            return null
        }

        const PeerDependence = Object.keys(this.state.componentFullInfo.packageJson.peerDependencies).map((dependence, index)=> {
            return (
                <tr key={index}>
                    <td>{this.renderDependence.call(this, dependence)}</td>
                    <td>{this.state.componentFullInfo.packageJson.peerDependencies[dependence]}</td>
                </tr>
            )
        })

        const Dependence = Object.keys(this.state.componentFullInfo.packageJson.dependencies).map((dependence, index)=> {
            return (
                <tr key={index}>
                    <td>{this.renderDependence.call(this, dependence)}</td>
                    <td>{this.state.componentFullInfo.packageJson.dependencies[dependence]}</td>
                </tr>
            )
        })

        return (
            <div className="_namespace">
                {Object.keys(this.state.componentFullInfo.packageJson.peerDependencies).length > 0 &&
                <table className="peer-dependence">
                    <thead>
                    <tr>
                        <td>依赖模块（Peer）</td>
                        <td>版本</td>
                    </tr>
                    </thead>
                    <tbody>
                    {PeerDependence}
                    </tbody>
                </table>
                }

                {Object.keys(this.state.componentFullInfo.packageJson.dependencies).length > 0 &&
                <table className="dependence">
                    <thead>
                    <tr>
                        <td>依赖模块</td>
                        <td>版本</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Dependence}
                    </tbody>
                </table>
                }
            </div>
        )
    }
}