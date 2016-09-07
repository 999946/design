"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var typings = require('./gif.type');
var index_1 = require('nt-image');
var index_2 = require('nt-transmit-transparently');
var Gif = function (_React$Component) {
    _inherits(Gif, _React$Component);

    function Gif() {
        var _ref;

        _classCallCheck(this, Gif);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Gif.__proto__ || Object.getPrototypeOf(Gif)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        _this.loadSuccess = false;
        return _this;
    }

    _createClass(Gif, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                source: this.props.firstSource || this.props.source
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                source: nextProps.source
            });
        }
    }, {
        key: "handlePress",
        value: function handlePress() {
            this.props.onPress();
            if (!this.loadSuccess) {
                this.setState({
                    source: this.props.firstSource || this.props.source
                });
            } else {
                this.setState({
                    source: this.props.source
                });
            }
        }
    }, {
        key: "handleLoadError",
        value: function handleLoadError() {
            this.loadSuccess = false;
        }
    }, {
        key: "handleLoadSuccess",
        value: function handleLoadSuccess() {
            this.loadSuccess = true;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(index_1.default, __assign({ source: this.state.source, onError: this.handleLoadError.bind(this), onLoad: this.handleLoadSuccess.bind(this), onPress: this.handlePress.bind(this) }, this.props.others));
        }
    }]);

    return Gif;
}(React.Component);
Gif.defaultProps = new typings.Props();
Gif = __decorate([index_2.TransmitTransparently('fallbackSource', 'fallbackColor', 'fallbackAddon', 'pressToReload', 'firstSource', 'fallbackHideImage', 'onPress')], Gif);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gif;