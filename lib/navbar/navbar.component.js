"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value       : subClass,
            enumerable  : false,
            writable    : true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = require('react');
var typings = require('./navbar.type');
var navbar_style_1 = require('./navbar.style');
var react_native_1 = require('react-native');

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        var _ref;

        _classCallCheck(this, Navbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Navbar, [{
        key  : 'render',
        value: function render() {
            return React.createElement(react_native_1.View, {style: [navbar_style_1.default.container]}, React.createElement(react_native_1.View, {style: navbar_style_1.default.leftContainer}, React.createElement(react_native_1.TouchableOpacity, {
                activeOpacity: 0.7,
                style        : navbar_style_1.default.navBtn,
                onPress      : this.props.onLeftPress
            }, this.props.left()), React.createElement(react_native_1.TouchableOpacity, {
                activeOpacity: 0.7,
                style        : navbar_style_1.default.navBtn,
                onPress      : this.props.onLeftExtPress
            }, this.props.leftExt)), React.createElement(react_native_1.View, {style: navbar_style_1.default.centerContainer}, this.props.center || React.createElement(react_native_1.Text, {
                    numberOfLines: 1,
                    style        : [navbar_style_1.default.titleText, this.props.titleStyle]
                }, this.props.title)), React.createElement(react_native_1.View, {style: navbar_style_1.default.rightContainer}, React.createElement(react_native_1.TouchableOpacity, {
                activeOpacity: 0.7,
                style        : navbar_style_1.default.navBtnRight,
                onPress      : this.props.onRightExtPress
            }, this.props.rightExt), React.createElement(react_native_1.TouchableOpacity, {
                activeOpacity: 0.7,
                style        : navbar_style_1.default.navBtnRight,
                onPress      : this.props.onRightPress
            }, this.props.right)));
        }
    }]);

    return Navbar;
}(React.Component);

Navbar.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = Navbar;