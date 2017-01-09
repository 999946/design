import * as React from 'react'
import {observer} from 'mobx-react'
import Modal from '../index'
import Button from '../../button/index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    constructor(props: any) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleShowModal() {
        this.setState({
            show: true
        })
    }

    handleOk() {
        this.setState({
            show: false
        })
    }

    handleCancel() {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleShowModal.bind(this)}>点我弹出模态框</Button>
                <Modal show={this.state.show}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Modal>
            </div>
        )
    }
}
                