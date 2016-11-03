import * as React from 'react'
import * as typings from './designer-home.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import {default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay} from 'react-html5video'

import {Modal} from '../../../components/web-common/modal/index'

import './designer-home.scss'

const demoList: Array<DesignerHomeModel.DemoList> = [{
    title: '基本操作',
    lists: [{
        title: '拖拽',
        description: '任意嵌套、排序',
        video: 'http://tb1.bdstatic.com/next-designer/drag.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/drag.jpg'
    }, {
        title: '实例树',
        description: '辅助视图区操作',
        video: 'http://tb1.bdstatic.com/next-designer/tree.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/tree.jpg'
    }, {
        title: '编辑',
        description: '效果实时预览',
        video: 'http://tb1.bdstatic.com/next-designer/edit.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/edit.jpg'
    }, {
        title: '视图尺寸',
        description: '修改尺寸适应 PC、Mobile',
        video: 'http://tb1.bdstatic.com/next-designer/change-size.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/change-size.jpg'
    }, {
        title: '删除',
        description: '快捷键 Delete',
        video: 'http://tb1.bdstatic.com/next-designer/delete.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/delete.jpg'
    }, {
        title: '绝对定位',
        description: '把元素固定在某个点',
        video: 'http://tb1.bdstatic.com/next-designer/absolute.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/absolute.jpg'
    }]
}, {
    title: '进阶学习',
    lists: [{
        title: '组合',
        description: '任意多个元素可以成组',
        video: 'http://tb1.bdstatic.com/next-designer/group.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/group.jpg'
    }, {
        title: '事件系统',
        description: '基本事件',
        video: 'http://tb1.bdstatic.com/next-designer/event-basic.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/event-basic.jpg'
    }, {
        title: '修改属性',
        description: '修改自己的属性',
        video: 'http://tb1.bdstatic.com/next-designer/change-props.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/change-props.jpg'
    }, {
        title: '事件联动',
        description: '可以指使任何组件触发动作',
        video: 'http://tb1.bdstatic.com/next-designer/event-emit.mp4',
        image: 'http://tb1.bdstatic.com/next-designer/event-emit.jpg'
    }]
}]

@inject('application', 'event', 'editor', 'editorAction') @observer
export default class DesignerHome extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
    }

    handleShowModal(videoUrl: string) {
        this.setState({
            show: true,
            videoUrl
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
        const Demos = demoList.map((demoCategory, demoCategoryIndex)=> {
            const DemoLists = demoCategory.lists.map((demo, demoIndex)=> {
                return (
                    <div className="helper-box"
                         key={demoIndex}
                         onClick={this.handleShowModal.bind(this,demo.video)}>
                        <img className="helper-image"
                             src={demo.image}/>
                        <div className="helper-description-container">
                            <div className="title">{demo.title}</div>
                            <div className="description">{demo.description}</div>
                            <i className="fa fa-video-camera play-icon"/>
                        </div>
                    </div>
                )
            })

            return (
                <div key={demoCategoryIndex}
                     className="helper-category-container">
                    <div className="helper-title">
                        {demoCategory.title}
                    </div>
                    <div className="helper-demo-list">
                        {DemoLists}
                    </div>
                </div>
            )
        })

        return (
            <div className="_namespace">
                <div className="hero hero-designer">
                    <div className="super-content">
                        <div className="brand">
                            <svg className="hero-logo">
                                <use xlinkHref="#next-logo"/>
                            </svg>
                            Designer
                        </div>
                        <div className="description">跨三端在线设计平台</div>
                        <div className="button-group">
                            <Link to="/design/explore"
                                  className="hero-jump">
                                浏览
                            </Link>

                            <Link to="/design/space"
                                  style={{marginLeft:20}}
                                  className="hero-jump">
                                工作台
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="body-container">
                    <div className="left-container">
                        <div className="helper-container">
                            {Demos}
                        </div>
                    </div>

                    <div className="right-container">

                    </div>
                </div>

                <Modal className="_namespace modal"
                       show={this.state.show}
                       onOk={this.handleOk.bind(this)}
                       size="large"
                       onCancel={this.handleCancel.bind(this)}>
                    {this.state.show &&
                    <div className="container">
                        <Video autoPlay>
                            <source src={this.state.videoUrl}
                                    type="video/mp4"/>
                        </Video>
                    </div>
                    }
                </Modal>
            </div>
        )
    }
}