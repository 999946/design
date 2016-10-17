import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './icons.type'
import { observer, inject } from 'mobx-react'
import { reactDropzoneComponent } from '../../../auto-create/require-ensure-npm'

import './icons.scss'

@inject('application', 'event') @observer
export default class Icons extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    async componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)

        await reactDropzoneComponent()
    }

    render() {
        return (
            <div className="_namespace">
                <div className="title-content">我管理的</div>
                <div className="icons-container">
                    <div className="icons-item">
                        <div className="left">
                            <img src=""
                                className="icon-img" />
                            <div className="icon-title">贴吧</div>
                        </div>

                        <div className="right">
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                            <img src="" className="icon" />
                        </div>
                    </div>
                </div>

                <div className="title-content">其它图标库</div>
                <div className="icons-container"></div>
            </div>
        )
    }
}