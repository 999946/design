"use strict";
const React = require('react');
const typings = require('./resource-card.type');
const resource_card_style_1 = require('./resource-card.style');
const react_native_1 = require('react-native');
class ResourceCard extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
    }
    render() {
        return (React.createElement(react_native_1.View, {style: resource_card_style_1.default.container}, React.createElement(react_native_1.Image, {style: resource_card_style_1.default.image, source: this.props.pictureSource}), React.createElement(react_native_1.View, {style: resource_card_style_1.default.textContainer}, React.createElement(react_native_1.Text, {style: resource_card_style_1.default.text, numberOfLines: 3}, this.props.title))));
    }
}
ResourceCard.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ResourceCard;
