"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const React = require('react');
const typings = require('./image.type');
const index_1 = require('../../../common/gif/index');
const index_2 = require('../../../common/transmit-transparently/index');
const react_native_1 = require('react-native');
let WefanImage = class WefanImage extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
    }
    fallbackAddon() {
        return (React.createElement(react_native_1.Image, {style: { width: 120, height: 80 }, source: require('../resources/empty.png')}));
    }
    render() {
        this.props.others.style = Object.assign({}, this.props.others.style, {
            justifyContent: 'center',
            alignItems: 'center'
        });
        return (React.createElement(index_1.default, __assign({firstSource: this.props.firstSource, source: this.props.source, fallbackColor: "#eee", fallbackHideImage: true, fallbackAddon: this.fallbackAddon.bind(this), pressToReload: true}, this.props.others)));
    }
};
WefanImage.defaultProps = new typings.Props();
WefanImage = __decorate([
    index_2.TransmitTransparently('fallbackSource', 'fallbackColor', 'fallbackAddon', 'pressToReload', 'firstSource', 'onPress')
], WefanImage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WefanImage;
