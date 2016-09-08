"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
var typings = require('./image.type');
var index_1 = require('nt-gif');
var index_2 = require('nt-transmit-transparently');
var react_native_1 = require('react-native');
var a = void 0;
var gif_component_1 = require('nt-gif/lib/gif/gif.component');
var ggg = gif_component_1.default;
var WefanImage = function (_React$Component) {
    _inherits(WefanImage, _React$Component);

    function WefanImage() {
        var _ref;

        _classCallCheck(this, WefanImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = WefanImage.__proto__ || Object.getPrototypeOf(WefanImage)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(WefanImage, [{
        key: "fallbackAddon",
        value: function fallbackAddon() {
            return React.createElement(react_native_1.Image, { style: { width: 120, height: 80 }, source: require('../resources/empty.png') });
        }
    }, {
        key: "render",
        value: function render() {
            this.props.others.style = _extends({}, this.props.others.style, {
                justifyContent: 'center',
                alignItems: 'center'
            });
            return React.createElement(index_1.default, __assign({ firstSource: this.props.firstSource, source: this.props.source, fallbackColor: "#eee", fallbackHideImage: true, fallbackAddon: this.fallbackAddon.bind(this), pressToReload: true }, this.props.others));
        }
    }]);

    return WefanImage;
}(React.Component);
WefanImage.defaultProps = new typings.Props();
WefanImage = __decorate([index_2.TransmitTransparently('fallbackSource', 'fallbackColor', 'fallbackAddon', 'pressToReload', 'firstSource', 'onPress')], WefanImage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WefanImage;