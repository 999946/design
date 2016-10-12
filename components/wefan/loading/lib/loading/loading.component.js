"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var react_native_1 = require("react-native");
var typings = require("./loading.type");
var loading_style_1 = require("./loading.style");

var Loading = function (_React$Component) {
    _inherits(Loading, _React$Component);

    function Loading() {
        _classCallCheck(this, Loading);

        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));

        _this.state = new typings.State();
        _this.angle = new react_native_1.Animated.Value(0);
        return _this;
    }

    _createClass(Loading, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.animate();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "animate",
        value: function animate() {
            var _this2 = this;

            this.angle.setValue(0);
            react_native_1.Animated.timing(this.angle, {
                toValue: 360,
                duration: 1500,
                easing: react_native_1.Easing.linear
            }).start(function () {
                _this2.animate.call(_this2);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(react_native_1.Animated.Image, { style: [loading_style_1.default.image, {
                    transform: [{
                        rotate: this.angle.interpolate({
                            inputRange: [0, 360],
                            outputRange: ['0deg', '360deg']
                        })
                    }]
                }], source: require('../images/loading.png') });
        }
    }]);

    return Loading;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Loading;
Loading.defaultProps = new typings.Props();