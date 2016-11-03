import * as React from 'react'
import * as Swiper from 'react-slick'
import * as typings from './home.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'

import './home.scss'
import './react-slick.scss'
import './react-slick-theme.scss'

const SliderSettings = {
    dots: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000
}

@inject('application', 'event') @observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
    }

    render() {
        return (
            <div className="_namespace">
                <Swiper {...SliderSettings}>
                    <div className="hero hero-components">
                        <div className="super-content">
                            <div className="brand">
                                <svg className="hero-logo">
                                    <use xlinkHref="#next-logo"/>
                                </svg>
                                Components
                            </div>
                            <div className="description">跨三端通用组件库</div>
                            <Link to="/components"
                                  className="hero-jump">
                                立即查看
                            </Link>
                        </div>
                    </div>

                    <div className="hero hero-updater">
                        <div className="super-content">
                            <div className="brand">
                                <svg className="hero-logo">
                                    <use xlinkHref="#next-logo"/>
                                </svg>
                                Updater
                            </div>
                            <div className="description">热更新平台</div>
                            <a href="http://updater.next.baidu.com/"
                               target="_blank"
                               className="hero-jump">
                                立即使用
                            </a>
                        </div>
                    </div>

                    <div className="hero hero-designer">
                        <div className="super-content">
                            <div className="brand">
                                <svg className="hero-logo">
                                    <use xlinkHref="#next-logo"/>
                                </svg>
                                Designer
                            </div>
                            <div className="description">跨三端在线设计平台</div>
                            <Link to="/design/space"
                                  className="hero-jump">
                                立即创建
                            </Link>
                        </div>
                    </div>
                </Swiper>


                <div className="body-container">


                </div>

                <div className="footer">
                    <div className="footer-item-container">
                        <div className="title">Github</div>
                        <a className="item"
                           href="https://github.com/nt-team/design"
                           target="_blank">
                            设计平台
                        </a>
                        <a className="item"
                           href="https://github.com/next-component"
                           target="_blank">
                            组件仓库
                        </a>
                        <a className="item"
                           href="https://github.com/nt-team"
                           target="_blank">
                            团队
                        </a>
                    </div>

                    <div className="footer-item-container">
                        <div className="title">相关站点</div>

                    </div>

                    <div className="footer-item-container">
                        <div className="title">社区</div>
                        <a className="item"
                           href="https://github.com/nt-team/design/issues"
                           target="_blank">
                            反馈建议
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}