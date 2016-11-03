import * as React from 'react'
import * as Swiper from 'react-slick'
import * as typings from './home.type'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
import * as _ from 'lodash'

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

let sliderList = [{
    name: '跨三端通用组件库',
    link: '/components',
    button: '立即查看',
    extendClass: 'hero-components',
    title: 'Components'
}, {
    name: '热更新平台',
    link: 'http://updater.next.baidu.com',
    button: '立即使用',
    extendClass: 'hero-updater',
    title: 'Updater'
}, {
    name: '跨三端在线设计平台',
    link: '/design',
    button: '立即查看',
    extendClass: 'hero-designer',
    title: 'Designer'
}]

/**
 * 数组随机排序
 */
function shuffle(array: Array<any>) {
    let currentIndex = array.length
    let temporaryValue: any
    let randomIndex: number

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}


@inject('application', 'event') @observer
export default class Home extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.props.event.emit(this.props.event.sceneLoaded)
    }

    render() {
        sliderList = shuffle(sliderList)
        const Sliders = sliderList.map((slider, index)=> {
            return (
                <div key={index}
                     className={`hero ${slider.extendClass}`}>
                    <div className="super-content">
                        <div className="brand">
                            <svg className="hero-logo">
                                <use xlinkHref="#next-logo"/>
                            </svg>
                            {slider.title}
                        </div>
                        <div className="description">{slider.name}</div>
                        {!_.startsWith(slider.link, 'http')
                            ?
                            <Link to={slider.link}
                                  className="hero-jump">
                                {slider.button}
                            </Link>
                            :
                            <a href={slider.link}
                               target="_blank"
                               className="hero-jump">
                                {slider.button}
                            </a>
                        }
                    </div>
                </div>
            )
        })

        return (
            <div className="_namespace">
                <Swiper {...SliderSettings}>
                    {Sliders}
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