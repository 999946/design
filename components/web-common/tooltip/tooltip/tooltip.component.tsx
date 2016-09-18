import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as typings from './tooltip.type'
import './tooltip.scss'

export default class ToolTip extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private childrenRef: React.ReactInstance
    private childrenDom: Element
    private tooltipDom: Element

    private handleChildrenMouseOverBind = this.handleChildrenMouseOver.bind(this)
    private handleChildrenMouseLeaveBind = this.handleChildrenMouseLeave.bind(this)

    componentDidMount() {
        this.childrenDom = ReactDOM.findDOMNode(this.childrenRef)
        this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOverBind)
        this.childrenDom.addEventListener('mouseleave', this.handleChildrenMouseLeaveBind)

        // 在 body 生成 tooltip
        this.tooltipDom = document.createElement('div')
        document.body.appendChild(this.tooltipDom)
        this.renderTooltip()
    }

    componentWillUnmount() {
        this.childrenDom.removeEventListener('mouseover', this.handleChildrenMouseOverBind)
        this.childrenDom.removeEventListener('mouseleave', this.handleChildrenMouseLeaveBind)

        // 在 body 移除 tooltip
        document.body.removeChild(this.tooltipDom)
    }

    /**
     * 鼠标滑到 children
     */
    handleChildrenMouseOver(event: MouseEvent) {
        const childrenBoundingClientRect = this.childrenDom.getBoundingClientRect()
        const tooltipSpanDom = this.tooltipDom.childNodes[0] as Element
        const tooltipSpanBoundingClientRect = tooltipSpanDom.getBoundingClientRect()

        this.setState({
            childrenLeft: childrenBoundingClientRect.left,
            childrenTop: childrenBoundingClientRect.top,
            childrenWidth: childrenBoundingClientRect.width,
            childrenHeight: childrenBoundingClientRect.height,
            tooltipWidth: tooltipSpanBoundingClientRect.width,
            tooltipHeight: tooltipSpanBoundingClientRect.height,
            show: true
        })
    }

    /**
     * 鼠标离开 children
     */
    handleChildrenMouseLeave(event: MouseEvent) {
        this.setState({
            show: false
        })
    }

    componentDidUpdate() {
        this.renderTooltip()
    }

    /**
     * 根据位置计算 left top
     */
    setPosition(toolTipStyle: React.CSSProperties, position: string) {
        switch (position) {
            case 'left':
                toolTipStyle.left = this.state.childrenLeft - this.state.tooltipWidth - 7
                toolTipStyle.top = this.state.childrenTop - (this.state.tooltipHeight / 2 - this.state.childrenHeight / 2)
                break
            case'top':
                toolTipStyle.left = this.state.childrenLeft + this.state.childrenWidth / 2 - this.state.tooltipWidth / 2
                toolTipStyle.top = this.state.childrenTop - this.state.tooltipHeight - 7
                break
            case 'right':
                toolTipStyle.left = this.state.childrenLeft + this.state.childrenWidth + 7
                toolTipStyle.top = this.state.childrenTop - (this.state.tooltipHeight / 2 - this.state.childrenHeight / 2)
                break
            case 'bottom':
                toolTipStyle.left = this.state.childrenLeft + this.state.childrenWidth / 2 - this.state.tooltipWidth / 2
                toolTipStyle.top = this.state.childrenTop + this.state.tooltipHeight
                break
        }
    }

    /**
     * 渲染 tooltip 内部的内容
     */
    renderTooltip() {
        let toolTipStyle: React.CSSProperties = {
            zIndex: this.props.zIndex
        }
        let position = this.props.position
        this.setPosition(toolTipStyle, position)

        // 如果位置有问题，换一个位置
        if (toolTipStyle.left < 0) {
            this.setPosition(toolTipStyle, 'right')
            position = 'right'
        }
        if (toolTipStyle.right > window.outerWidth) {
            this.setPosition(toolTipStyle, 'left')
            position = 'left'
        }
        if (toolTipStyle.top < 0) {
            this.setPosition(toolTipStyle, 'bottom')
            position = 'bottom'
        }
        if (toolTipStyle.top > window.outerHeight) {
            this.setPosition(toolTipStyle, 'top')
            position = 'top'
        }

        const toolTipProps = {
            className: classNames({
                '_namespace': true,
                'active': this.state.show,
                [position]: true
            }),
            style: toolTipStyle
        }

        const ToolTipElement = (
            <span {...toolTipProps}>{this.props.title === '' ? this.props.titleRender() : this.props.title}</span>
        )

        ReactDOM.render(ToolTipElement, this.tooltipDom)
    }

    render() {
        const children = React.cloneElement(React.Children.only(this.props.children), {
            ref: (ref: React.ReactInstance)=> {
                this.childrenRef = ref
            }
        })

        return children
    }
}