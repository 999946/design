"use strict";
const React = require('react');
const classNames = require('classnames');
const typings = require('./button-group.type');
require('./button-group.scss');
class ButtonGroup extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
    }
    render() {
        const groupClass = classNames({
            '_namespace': true,
            'btn-group': !this.props.vertical,
            'btn-group-vertical': this.props.vertical,
            [this.props.className]: !!this.props.className
        });
        return (React.createElement("div", {className: groupClass}, this.props.children));
    }
}
ButtonGroup.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ButtonGroup;
