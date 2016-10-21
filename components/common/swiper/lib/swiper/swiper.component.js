"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var React = require("react");
var typings = require("./swiper.type");
var react_native_1 = require("react-native");

var Swiper = function (_React$Component) {
    (0, _inherits3.default)(Swiper, _React$Component);

    function Swiper() {
        (0, _classCallCheck3.default)(this, Swiper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).apply(this, arguments));

        _this.state = new typings.State();
        _this.responderStart = false;
        _this.lastPositionX = null;
        _this.lastPositionY = null;
        _this.animatedPositionX = new react_native_1.Animated.Value(0);
        _this.horizontalWholeCounter = 0;
        _this.width = 0;
        _this.height = 0;
        _this.nowIndex = 0;
        return _this;
    }

    (0, _createClass3.default)(Swiper, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            this.panResponder = react_native_1.PanResponder.create({
                onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt, gestureState) {
                    return true;
                },
                onStartShouldSetPanResponderCapture: function onStartShouldSetPanResponderCapture(evt, gestureState) {
                    return true;
                },
                onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
                    return true;
                },
                onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture(evt, gestureState) {
                    return true;
                },
                onPanResponderTerminationRequest: function onPanResponderTerminationRequest(evt, gestureState) {
                    return false;
                },
                onPanResponderGrant: function onPanResponderGrant(evt, gestureState) {
                    _this2.lastPositionX = null;
                    _this2.lastPositionY = null;
                    _this2.horizontalWholeCounter = 0;
                },
                onPanResponderMove: function onPanResponderMove(evt, gestureState) {
                    if (evt.nativeEvent.changedTouches.length <= 1) {
                        var diffX = gestureState.dx - _this2.lastPositionX;
                        if (_this2.lastPositionX === null) {
                            diffX = 0;
                        }
                        var diffY = gestureState.dy - _this2.lastPositionY;
                        if (_this2.lastPositionY === null) {
                            diffY = 0;
                        }
                        _this2.lastPositionX = gestureState.dx;
                        _this2.lastPositionY = gestureState.dy;
                        _this2.horizontalWholeCounter += diffX;
                        if (_this2.horizontalWholeCounter > _this2.width * _this2.props.maxDistance / 100) {
                            _this2.horizontalWholeCounter = _this2.width * _this2.props.maxDistance / 100;
                        }
                        if (_this2.horizontalWholeCounter < -_this2.width * _this2.props.maxDistance / 100) {
                            _this2.horizontalWholeCounter = -_this2.width * _this2.props.maxDistance / 100;
                        }
                        _this2.animatedPositionX.setValue(-_this2.nowIndex * _this2.width + _this2.horizontalWholeCounter);
                    }
                },
                onPanResponderRelease: function onPanResponderRelease(evt, gestureState) {
                    if (_this2.horizontalWholeCounter < -_this2.width * _this2.props.threshold / 100) {
                        if (_this2.nowIndex < React.Children.count(_this2.props.children) - 1) {
                            _this2.nowIndex += 1;
                        }
                    } else if (_this2.horizontalWholeCounter > _this2.width * _this2.props.threshold / 100) {
                        if (_this2.nowIndex > 0) {
                            _this2.nowIndex -= 1;
                        }
                    }
                    react_native_1.Animated.timing(_this2.animatedPositionX, {
                        toValue: -_this2.nowIndex * _this2.width,
                        duration: 100
                    }).start();
                },
                onPanResponderTerminate: function onPanResponderTerminate(evt, gestureState) {}
            });
        }
    }, {
        key: "handleLayout",
        value: function handleLayout(event) {
            this.width = event.nativeEvent.layout.width;
            this.height = event.nativeEvent.layout.height;
            this.forceUpdate();
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var Childs = React.Children.map(this.props.children, function (child, index) {
                return React.createElement(react_native_1.View, { style: { width: _this3.width, height: _this3.height, justifyContent: 'center', alignItems: 'center' } }, child);
            });
            var animateConf = {
                transform: [{
                    translateX: this.animatedPositionX
                }]
            };
            return React.createElement(react_native_1.View, __assign({ style: [this.props.style, { overflow: 'hidden' }] }, this.panResponder.panHandlers, { onLayout: this.handleLayout.bind(this) }), React.createElement(react_native_1.Animated.View, { style: [animateConf, { width: this.width, height: this.height, flexDirection: 'row' }] }, Childs));
        }
    }]);
    return Swiper;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Swiper;
Swiper.defaultProps = new typings.Props();