import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './tooltip.type'
import './tooltip.scss'

export default class ToolTip extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private selfDom: Element
    private childrenRef: React.ReactInstance
    private childrenDom: Element
    private tooltipRef: React.ReactInstance
    private tooltipDom: Element

    private handleChildrenMouseOverBind = this.handleChildrenMouseOver.bind(this)

    componentDidMount() {
        this.selfDom = ReactDOM.findDOMNode(this)
        this.tooltipDom = ReactDOM.findDOMNode(this.tooltipRef)
        this.childrenDom = ReactDOM.findDOMNode(this.childrenRef)
        this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOverBind)
    }

    componentWillUnmount() {
        this.childrenDom.removeEventListener('mouseover', this.handleChildrenMouseOverBind)
    }

    /**
     * 鼠标滑过 children
     */
    handleChildrenMouseOver(event: MouseEvent) {
        this.setState({
            childrenLeft: this.childrenDom.clientLeft - this.selfDom.clientLeft,
            childrenTop: this.childrenDom.clientTop - this.selfDom.clientTop,
            childrenWidth: this.childrenDom.clientWidth,
            childrenHeight: this.childrenDom.clientHeight,
            tooltipWidth: this.tooltipDom.clientWidth,
            tooltipHeight: this.tooltipDom.clientHeight
        })
    }

    render() {
        const children = React.cloneElement(React.Children.only(this.props.children), {
            ref: (ref: React.ReactInstance)=> {
                this.childrenRef = ref
            }
        })

        const toolTipStyle = {
            marginLeft: this.state.childrenWidth / 2 - this.state.tooltipWidth / 2,
            marginTop: -(this.state.tooltipHeight + 3)
        }
        const toolTipProps = {
            className: 'tooltip-text',
            style: toolTipStyle,
            ref: (ref: React.ReactInstance)=> {
                this.tooltipRef = ref
            }
        }

        return (
            <div className="_namespace">
                {children}
                <span {...toolTipProps}>{this.props.title === '' ? this.props.titleRender() : this.props.title}</span>
            </div>
        )
    }
}