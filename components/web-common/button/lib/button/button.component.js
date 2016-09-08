"use strict";
const React = require('react');
const classNames = require('classnames');
const ReactDOM = require('react-dom');
const typings = require('./button.type');
require('./button.scss');
const hasClass = (obj, cls) => {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};
const removeClass = (obj, cls) => {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
};
class Button extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
    }
    componentDidMount() {
        this.selfDom = ReactDOM.findDOMNode(this);
    }
    handleClick(event) {
        if (this.props.disabled || this.props.loading)
            return;
        this.props.onClick(event);
        let d, x, y;
        let taint = this.selfDom.querySelector('.taint');
        if (!taint) {
            taint = document.createElement('div');
            taint.className = 'taint';
            this.selfDom.appendChild(taint);
        }
        removeClass(taint, 'drop');
        const selfDomBoundingClientRect = this.selfDom.getBoundingClientRect();
        if (!taint.clientHeight && !taint.clientWidth) {
            d = Math.max(selfDomBoundingClientRect.width, selfDomBoundingClientRect.height);
            taint.style.height = d + 'px';
            taint.style.width = d + 'px';
        }
        x = event.pageX - selfDomBoundingClientRect.left - taint.clientWidth / 2;
        y = event.pageY - selfDomBoundingClientRect.top - taint.clientHeight / 2;
        taint.className += ' drop';
        taint.style.top = y + 'px';
        taint.style.left = x + 'px';
    }
    render() {
        let addon = null;
        if (this.props.addonLeft || this.props.addonRight) {
            let addonClass = classNames({
                'fa': true,
                ['fa-' + (this.props.addonLeft || this.props.addonRight)]: true,
                'btn-addon-left': this.props.addonLeft,
                'btn-addon-right': this.props.addonRight
            });
            addon = (React.createElement("i", {className: addonClass}));
        }
        let loadingComponent = null;
        if (this.props.loading === true) {
            let loadingClass = classNames({
                'loading-container': true,
                'show': true
            });
            loadingComponent = (React.createElement("div", {className: loadingClass}, React.createElement("i", {className: "fit-button-loading animation-spin"})));
        }
        const btnClass = classNames({
            '_namespace': true,
            'btn': true,
            ['btn-' + this.props.type]: true,
            'disabled': this.props.disabled || this.props.loading === true,
            'btn-addon': this.props.addonLeft || this.props.addonRight,
            'btn-rounded': this.props.rounded,
            'active': this.props.active,
            [this.props['className']]: !!this.props['className']
        });
        return (React.createElement("button", {onClick: this.handleClick.bind(this), className: btnClass}, React.createElement("div", {className: "button-container"}, this.props.addonLeft ? addon : null, React.createElement("div", {className: "text-child"}, this.props.children), this.props.addonRight ? addon : null, this.props.loading ? loadingComponent : null)));
    }
}
Button.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
