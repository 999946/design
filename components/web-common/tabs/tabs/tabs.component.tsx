import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as $ from 'jquery'
import * as typings from './tabs.type'
import * as classNames from 'classnames'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'
import {autoBindMethod} from '../../../common/auto-bind/index'

import './tabs.scss'

const renderTab = (name: string)=> {
    return (active: boolean)=> {
        if (!active) {
            return (
                <div className="center-text">{name}</div>
            )
        } else {
            return (
                <div className="tab-bar-content">
                    <div className="tab-bar-left">
                        <div className="tab-bar-left-nav"></div>
                    </div>
                    {name}
                    <div className="tab-bar-right">
                        <div className="tab-bar-right-nav"></div>
                    </div>
                </div>
            )
        }
    }
}

@TransmitTransparently()
export default class Tabs extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private previousTitleIndex: number
    private dom: Element

    private activeIndex: number

    componentWillMount() {
        this.state = {
            activeKey: this.props.activeKey || this.props.defaultActiveKey
        }
        this.previousTitleIndex = -1
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)

        let activeIndex = -1
        React.Children.map(this.props.children, (item: any, index: number)=> {
            if (this.state.activeKey === item.props.activeKey) {
                activeIndex = index
            }
        })
        this.setActive(this.state.activeKey, activeIndex)

        this.activeIndex = activeIndex

        window.addEventListener('resize', this.handleAnyDomChange)

        if (MutationObserver) {
            // Listen to changes on the elements in the page that affect layout
            const mObserver = new MutationObserver(this.handleAnyDomChange)
            mObserver.observe(ReactDOM.findDOMNode(this), {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleAnyDomChange)
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if ('activeKey' in nextProps && nextProps.activeKey !== null) {
            this.setState({
                activeKey: nextProps.activeKey
            })
        }
    }

    @autoBindMethod handleAnyDomChange() {
        this.setActive(this.state.activeKey, this.activeIndex)
    }

    setActive(value: string|number, index: number) {
        const $dom = $(this.dom)

        // tab标题容器
        const titleContainer = $dom.find('.title-container')

        // 当前选择标题元素
        const titleItem = $dom.find(`.title-item-${index}`)

        // 当前标题元素距离容器的做边距
        const currentLeft = titleItem.offset().left - titleContainer.offset().left

        this.setState({
            activeKey: value,
            isForward: index > this.previousTitleIndex,
            moveBarStyle: {
                left: currentLeft,
                right: titleContainer.width() - currentLeft - titleItem.width() - 20
            }
        })

        this.previousTitleIndex = index
    }

    handleTitleClick(value: string|number, index: number) {
        this.setActive(value, index)
        this.props.onChange(value)
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'retro': this.props.type === 'retro',
            [this.props.className]: !!this.props.className,
        })

        let Title = React.Children.map(this.props.children, (item: any, index: number)=> {
            const isActive = this.state.activeKey === item.props.activeKey
            let titleClassNames = classNames({
                'active': isActive,
                'title-item': true,
                [`title-item-${index}`]: true
            })

            let titleContent: React.ReactElement<any> = item.props.tab || item.props.tabRender(isActive)
            switch (this.props.type) {
                case 'retro':
                    titleContent = renderTab(item.props.tab)(isActive)
                    break
            }

            return (
                <div onClick={this.handleTitleClick.bind(this,item.props.activeKey,index)}
                     className={titleClassNames}>{titleContent}</div>
            )
        })

        let Children = React.Children.map(this.props.children, (item: any)=> {
            return React.cloneElement(item, {
                active: this.state.activeKey === item.props.activeKey
            })
        })

        let moveBarClassnames = classNames({
            'move-bar': true,
            'forward': this.state.isForward,
            'backward': !this.state.isForward
        })

        return (
            <div {...this.props.others} className={classes}>
                <div className="title-container">
                    <div className={moveBarClassnames}
                         style={this.state.moveBarStyle}></div>
                    {Title}
                </div>
                <div className="content-container">
                    {Children}
                </div>
            </div>
        )
    }
}
                