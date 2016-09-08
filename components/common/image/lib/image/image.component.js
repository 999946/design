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
const react_native_1 = require('react-native');
const index_1 = require('../../transmit-transparently/index');
let ImageComponent = class ImageComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = new typings.State();
        this.fallbackLoadCounter = 0;
    }
    componentWillMount() {
        this.setState({
            source: this.props.source
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            source: nextProps.source,
            loadImageSuccess: true
        });
    }
    handleLoadSuccess() {
        this.fallbackLoadCounter = 0;
        if (this.state.source === this.props.source) {
            this.setState({
                loadImageSuccess: true
            });
        }
    }
    handleLoadError() {
        this.props.onError();
        this.setState({
            loadImageSuccess: false
        });
        if (this.props.fallbackSource) {
            if (this.fallbackLoadCounter < 3) {
                this.fallbackLoadCounter++;
                this.setState({
                    source: this.props.fallbackSource
                });
            }
        }
    }
    handlePress() {
        this.props.onPress();
        if (this.props.pressToReload && this.state.loadImageSuccess === false) {
            this.fallbackLoadCounter = 0;
            this.setState({
                source: this.props.source
            });
            this.forceUpdate();
        }
    }
    render() {
        this.props.others.style = Object.assign({}, this.props.others.style, {
            backgroundColor: this.state.loadImageSuccess ? 'transparent' : this.props.fallbackColor
        });
        return (React.createElement(react_native_1.TouchableOpacity, __assign({activeOpacity: 1, onPress: this.handlePress.bind(this)}, this.props.others), !(!this.state.loadImageSuccess && this.props.fallbackHideImage) &&
            React.createElement(react_native_1.Image, __assign({onError: this.handleLoadError.bind(this), onLoad: this.handleLoadSuccess.bind(this), source: this.state.source}, this.props.others)), !this.state.loadImageSuccess &&
            this.props.fallbackAddon()));
    }
};
ImageComponent.defaultProps = new typings.Props();
ImageComponent = __decorate([
    index_1.TransmitTransparently('fallbackSource', 'fallbackColor', 'pressToReload', 'fallbackAddon', 'fallbackHideImage')
], ImageComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageComponent;
