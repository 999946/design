"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var typings = require('./scroll-number.type');
var index_1 = require('nt-transmit-transparently');
var _ = require('lodash');
var css_animation_1 = require('css-animation');
require('./scroll-number.css');
var getNumberArray = function getNumberArray(num) {
    return num ? num.toString().split('').reverse().map(function (i) {
        return Number(i);
    }) : [];
};
var ScrollNumber = function (_React$Component) {
    _inherits(ScrollNumber, _React$Component);

    function ScrollNumber(props) {
        _classCallCheck(this, ScrollNumber);

        var _this = _possibleConstructorReturn(this, (ScrollNumber.__proto__ || Object.getPrototypeOf(ScrollNumber)).call(this, props));

        _this.state = new typings.State();
        _this.state = {
            animateStarted: true,
            count: props.count
        };
        return _this;
    }

    _createClass(ScrollNumber, [{
        key: "getPositionByNum",
        value: function getPositionByNum(num, i) {
            if (this.state.animateStarted) {
                return 10 + num;
            }
            var currentDigit = getNumberArray(this.state.count)[i];
            var lastDigit = getNumberArray(this.lastCount)[i];
            if (this.state.count > this.lastCount) {
                if (currentDigit >= lastDigit) {
                    return 10 + num;
                }
                return 20 + num;
            }
            if (currentDigit <= lastDigit) {
                return 10 + num;
            }
            return num;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if ('count' in nextProps) {
                if (this.state.count === nextProps.count) {
                    return;
                }
                this.lastCount = this.state.count;
                this.setState({
                    animateStarted: true
                }, function () {
                    setTimeout(function () {
                        _this2.setState({
                            animateStarted: false,
                            count: nextProps.count
                        }, function () {
                            _this2.props.onAnimated();
                        });
                    }, 5);
                });
            }
        }
    }, {
        key: "renderNumberList",
        value: function renderNumberList() {
            var childrenToReturn = [];
            for (var i = 0; i < 30; i++) {
                childrenToReturn.push(React.createElement("p", { key: i }, i % 10));
            }
            return childrenToReturn;
        }
    }, {
        key: "renderCurrentNumber",
        value: function renderCurrentNumber(num, i) {
            var position = this.getPositionByNum(num, i);
            var height = this.props.height;
            var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
            return React.createElement('span', {
                className: "only",
                style: {
                    transition: removeTransition && 'none',
                    WebkitTransform: "translate3d(0, " + -position * height + "px, 0)",
                    transform: "translate3d(0, " + -position * height + "px, 0)",
                    height: height
                },
                key: i
            }, this.renderNumberList());
        }
    }, {
        key: "renderNumberElement",
        value: function renderNumberElement() {
            var _this3 = this;

            if (!this.state.count || isNaN(this.state.count)) {
                return this.state.count;
            }
            return getNumberArray(this.state.count).map(function (num, i) {
                return _this3.renderCurrentNumber(num, i);
            }).reverse();
        }
    }, {
        key: "render",
        value: function render() {
            var props = _.assign({}, this.props.others, {
                className: "scroll-number " + this.props.className + " nt-web-badge-scroll_number"
            });
            var isBrowser = typeof document !== 'undefined' && typeof window !== 'undefined';
            if (isBrowser && css_animation_1.isCssAnimationSupported) {
                return React.createElement(this.props.component, props, this.renderNumberElement());
            }
            return React.createElement(this.props.component, props, props['count']);
        }
    }]);

    return ScrollNumber;
}(React.Component);
ScrollNumber.defaultProps = new typings.Props();
ScrollNumber = __decorate([index_1.TransmitTransparently()], ScrollNumber);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrollNumber;