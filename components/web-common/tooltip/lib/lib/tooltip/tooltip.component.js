"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');
const typings = require('./tooltip.type');
require('./tooltip.scss');
class ToolTip extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
        this.handleChildrenMouseOverBind = this.handleChildrenMouseOver.bind(this);
        this.handleChildrenMouseLeaveBind = this.handleChildrenMouseLeave.bind(this);
    }
    componentDidMount() {
        this.childrenDom = ReactDOM.findDOMNode(this.childrenRef);
        this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOverBind);
        this.childrenDom.addEventListener('mouseleave', this.handleChildrenMouseLeaveBind);
        this.tooltipDom = document.createElement('div');
        document.body.appendChild(this.tooltipDom);
        this.renderTooltip();
    }
    componentWillUnmount() {
        this.childrenDom.removeEventListener('mouseover', this.handleChildrenMouseOverBind);
        this.childrenDom.removeEventListener('mouseleave', this.handleChildrenMouseLeaveBind);
        document.body.removeChild(this.tooltipDom);
    }
    handleChildrenMouseOver(event) {
        const childrenBoundingClientRect = this.childrenDom.getBoundingClientRect();
        const tooltipSpanDom = this.tooltipDom.childNodes[0];
        const tooltipSpanBoundingClientRect = tooltipSpanDom.getBoundingClientRect();
        this.setState({
            childrenLeft: childrenBoundingClientRect.left,
            childrenTop: childrenBoundingClientRect.top,
            childrenWidth: childrenBoundingClientRect.width,
            childrenHeight: childrenBoundingClientRect.height,
            tooltipWidth: tooltipSpanBoundingClientRect.width,
            tooltipHeight: tooltipSpanBoundingClientRect.height,
            show: true
        });
    }
    handleChildrenMouseLeave(event) {
        this.setState({
            show: false
        });
    }
    componentDidUpdate() {
        this.renderTooltip();
    }
    renderTooltip() {
        const toolTipStyle = {
            left: this.state.childrenLeft + this.state.childrenWidth / 2 - this.state.tooltipWidth / 2,
            top: this.state.childrenTop - this.state.tooltipHeight - 7,
            zIndex: this.props.zIndex
        };
        const toolTipProps = {
            className: classNames({
                '_namespace': true,
                'active': this.state.show
            }),
            style: toolTipStyle
        };
        const ToolTipElement = (React.createElement("span", __assign({}, toolTipProps), this.props.title === '' ? this.props.titleRender() : this.props.title));
        ReactDOM.render(ToolTipElement, this.tooltipDom);
    }
    render() {
        const children = React.cloneElement(React.Children.only(this.props.children), {
            ref: (ref) => {
                this.childrenRef = ref;
            }
        });
        return children;
    }
}
ToolTip.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToolTip;
