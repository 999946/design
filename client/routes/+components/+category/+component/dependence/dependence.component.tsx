import * as React from 'react'
import * as typings from './dependence.type'
import {observer, inject} from 'mobx-react'

import './dependence.scss'

@observer
export default class Dependence extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        if (!this.props.packageJson) {
            return null
        }

        const PeerDependence = Object.keys(this.props.packageJson.peerDependencies).map((dependence, index)=> {
            return (
                <tr key={index}>
                    <td>{dependence}</td>
                    <td>{this.props.packageJson.peerDependencies[dependence]}</td>
                </tr>
            )
        })

        const Dependence = Object.keys(this.props.packageJson.dependencies).map((dependence, index)=> {
            return (
                <tr key={index}>
                    <td>{dependence}</td>
                    <td>{this.props.packageJson.peerDependencies[dependence]}</td>
                </tr>
            )
        })

        return (
            <div className="_namespace">
                {Object.keys(this.props.packageJson.peerDependencies).length > 0 &&
                <table>
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

                {Object.keys(this.props.packageJson.dependencies).length > 0 &&
                <table>
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