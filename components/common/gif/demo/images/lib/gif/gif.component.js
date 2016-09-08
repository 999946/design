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
const typings = require('./gif.type');
const index_1 = require('../../image/index');
const index_2 = require('../../transmit-transparently/index');
let Gif = class Gif extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
        this.loadSuccess = false;
    }
    componentWillMount() {
        this.setState({
            source: this.props.firstSource || this.props.source
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            source: nextProps.source
        });
    }
    handlePress() {
        this.props.onPress();
        if (!this.loadSuccess) {
            this.setState({
                source: this.props.firstSource || this.props.source
            });
        }
        else {
            this.setState({
                source: this.props.source
            });
        }
    }
    handleLoadError() {
        this.loadSuccess = false;
    }
    handleLoadSuccess() {
        this.loadSuccess = true;
    }
    render() {
        return (React.createElement(index_1.default, __assign({source: this.state.source, onError: this.handleLoadError.bind(this), onLoad: this.handleLoadSuccess.bind(this), onPress: this.handlePress.bind(this)}, this.props.others)));
    }
};
Gif.defaultProps = new typings.Props();
Gif = __decorate([
    index_2.TransmitTransparently('fallbackSource', 'fallbackColor', 'fallbackAddon', 'pressToReload', 'firstSource', 'fallbackHideImage', 'onPress')
], Gif);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gif;
