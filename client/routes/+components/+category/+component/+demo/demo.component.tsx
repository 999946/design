import * as React from 'react'
import * as typings from './demo.type'
import FullComponentInfo from '../full-component-info/full-component-info.component'
import {observer, inject} from 'mobx-react'
import Modal from '../../../../../../components/web-common/modal/index'
import {Button, ButtonGroup} from '../../../../../../components/web-common/button/index'
import * as componentHelper from '../../../../../../scripts/manage/utils/component-helper'

const highlightJs = require('highlight.js')

import './demo.scss'

@observer
export default class Demo extends FullComponentInfo <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    /**
     * 模态框按钮
     */
    renderOperateButton() {
        return (
            <Button onClick={this.closeModal.bind(this)}>已阅</Button>
        )
    }

    /**
     * 显示模态框展示全部内容
     */
    showModal(demo: RouterComponentsModel.Demo) {
        this.setState({
            selectedDemo: demo
        }, ()=> {
            highlightJs.highlightBlock(document.getElementById('component-pre'))
        })
    }

    /**
     * 关闭模态框
     */
    closeModal() {
        this.setState({
            selectedDemo: null as RouterComponentsModel.Demo
        })
    }

    render() {
        const Demos = this.state.componentFullInfo && this.state.componentFullInfo.demos && this.state.componentFullInfo.demos.map((demo, index)=> {
                return (
                    <div key={index}
                         className="demo-item">
                        <div className="demo-title">
                            <span>{demo.Class.title}</span>
                            <Button type="secondary"
                                    onClick={this.showModal.bind(this, demo)}>查看源码</Button>
                        </div>
                        <demo.Class/>
                    </div>
                )
            })

        let modalChild: React.ReactElement<any> = null
        if (this.state.selectedDemo) {
            const DemoClass = this.state.selectedDemo.Class

            let demoCode = this.state.selectedDemo.code

            // 把 import xxx from './index' 换成安装路径
            demoCode = demoCode.replace(/import\s+.*\s+from\s+\'[^\']*\'/g, (matched: string)=> {
                return matched.replace(/\'..\/index\'/g, `\'${componentHelper.getPackageName(this.state.categoryInfo.name, this.state.componentInfo.name)}\'`)
            })

            // 干掉这几段代码
            // import * as React from 'react'
            // import {observer} from 'mobx-react'
            // @observe
            demoCode = demoCode.replace(/import\s+\*\s+as\s+React\s+from\s+\'react\'\n/g, '')
            demoCode = demoCode.replace(/import\s+\{[^\}]*\}\s+from\s+\'mobx-react\'\n/g, '')
            demoCode = demoCode.replace(/\@observer\n/g, '')
            demoCode = demoCode.replace(/\s+static\s+title\s?=\s?.*\n/g, '')
            demoCode = demoCode.replace(/\s+static\s+description\s?=\s?.*\n/g, '')

            modalChild = (
                <div>
                    <DemoClass/>
                    <br/>
                    <pre id="component-pre"
                         style={{paddingLeft:15}}>
                        <code className="typescript github">{demoCode}</code>
                    </pre>
                </div>
            )
        }

        return (
            <div className="_namespace">
                {Demos}
                <Modal show={this.state.selectedDemo !== null}
                       title={this.state.selectedDemo && this.state.selectedDemo.Class.title}
                       onCancel={this.closeModal.bind(this)}
                       renderOperateButton={this.renderOperateButton.bind(this)}
                       size="large">
                    {modalChild}
                </Modal>
            </div>
        )
    }
}