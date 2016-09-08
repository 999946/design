"use strict";
const React = require('react');
const typings = require('./navbar.type');
const navbar_style_1 = require('./navbar.style');
const react_native_1 = require('react-native');
class Navbar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
    }
    render() {
        return (React.createElement(react_native_1.View, {style: [navbar_style_1.default.container]}, React.createElement(react_native_1.View, {style: navbar_style_1.default.leftContainer}, React.createElement(react_native_1.TouchableOpacity, {activeOpacity: 0.7, style: navbar_style_1.default.navBtn, onPress: this.props.onLeftPress}, this.props.left()), React.createElement(react_native_1.TouchableOpacity, {activeOpacity: 0.7, style: navbar_style_1.default.navBtn, onPress: this.props.onLeftExtPress}, this.props.leftExt)), React.createElement(react_native_1.View, {style: navbar_style_1.default.centerContainer}, this.props.center
            ||
                React.createElement(react_native_1.Text, {numberOfLines: 1, style: [navbar_style_1.default.titleText, this.props.titleStyle]}, this.props.title)), React.createElement(react_native_1.View, {style: navbar_style_1.default.rightContainer}, React.createElement(react_native_1.TouchableOpacity, {activeOpacity: 0.7, style: navbar_style_1.default.navBtnRight, onPress: this.props.onRightExtPress}, this.props.rightExt), React.createElement(react_native_1.TouchableOpacity, {activeOpacity: 0.7, style: navbar_style_1.default.navBtnRight, onPress: this.props.onRightPress}, this.props.right))));
    }
}
Navbar.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;
