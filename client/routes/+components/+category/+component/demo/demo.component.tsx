import * as React from 'react'
import * as typings from './demo.type'
import {observer, inject} from 'mobx-react'
import Modal from 'fit-modal'
import {Button, ButtonGroup} from 'fit-button'

const highlightJs = require('highlight.js')

@observer
export default class Demo extends React.Component <typings.PropsDefine, typings.StateDefine> {
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
    showModal(demo: typings.Demo) {
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
            selectedDemo: null
        })
    }

    render() {
        const Demos = this.props.demos.map((demo, index)=> {
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

            modalChild = (
                <div>
                    <DemoClass/>
                    <br/>
                    <pre id="component-pre">
                        <code className="typescript github">{this.state.selectedDemo.code}</code>
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