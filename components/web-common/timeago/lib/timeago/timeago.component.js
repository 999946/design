"use strict";

var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

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

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var React = require('react');
var typings = require('./timeago.type');
var moment = require('moment');
var _ = require('lodash');
var index_1 = require('nt-transmit-transparently');
var Timeago = function (_React$Component) {
    _inherits(Timeago, _React$Component);

    function Timeago(props) {
        _classCallCheck(this, Timeago);

        var _this = _possibleConstructorReturn(this, (Timeago.__proto__ || Object.getPrototypeOf(Timeago)).call(this, props));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Timeago, [{
        key  : "componentWillMount",
        value: function componentWillMount() {
            this._isMounted = true;
            this.timeoutId = 0;
        }
    }, {
        key  : "componentDidMount",
        value: function componentDidMount() {
            if (this.props.live) {
                this.tick(true);
            }
        }
    }, {
        key  : "componentDidUpdate",
        value: function componentDidUpdate(nextProps) {
            if (this.props.live !== nextProps.live || this.props.date !== nextProps.date) {
                if (!this.props.live && this.timeoutId) {
                    clearTimeout(this.timeoutId);
                    this.timeoutId = undefined;
                }
                this.tick();
            }
        }
    }, {
        key  : "componentWillUnmount",
        value: function componentWillUnmount() {
            this._isMounted = false;
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = undefined;
            }
        }
    }, {
        key  : "tick",
        value: function tick(refresh) {
            var _this2 = this;

            if (!this._isMounted || !this.props.live) {
                return;
            }
            var period = 1000;
            var then = this.props.date.valueOf();
            var now = Date.now();
            var seconds = Math.round(Math.abs(now - then) / 1000);
            if (seconds < 60) {
                period = 1000;
            } else if (seconds < 60 * 60) {
                period = 1000 * 60;
            } else if (seconds < 60 * 60 * 24) {
                period = 1000 * 60 * 60;
            } else {
                period = 0;
            }
            period = Math.min(Math.max(period, this.props.minPeriod), this.props.maxPeriod);
            if (!!period) {
                this.timeoutId = setTimeout(function () {
                    _this2.tick();
                }, period);
            }
            if (!refresh) {
                this.forceUpdate();
            }
        }
    }, {
        key  : "render",
        value: function render() {
            var _others = _extends({}, this.props.others);
            var then = this.props.date.valueOf();
            var now = Date.now();
            if (now - then >= this.props.loseTime) {
                var fullDate = moment(this.props.date);
                var formatString = fullDate.format(this.props.loseFormat);
                return React.createElement(this.props.component, _others, formatString);
            } else {
                var seconds = Math.round(Math.abs(now - then) / 1000);
                var suffix = then < now ? this.props.customLabel.ago : this.props.customLabel.fromNow;
                var value = void 0,
                    unit = void 0;
                if (seconds < 60) {
                    value = Math.round(seconds);
                    unit = this.props.customLabel.second;
                } else if (seconds < 60 * 60) {
                    value = Math.round(seconds / 60);
                    unit = this.props.customLabel.minute;
                } else if (seconds < 60 * 60 * 24) {
                    value = Math.round(seconds / (60 * 60));
                    unit = this.props.customLabel.hour;
                } else if (seconds < 60 * 60 * 24 * 7) {
                    value = Math.round(seconds / (60 * 60 * 24));
                    unit = this.props.customLabel.day;
                } else if (seconds < 60 * 60 * 24 * 30) {
                    value = Math.round(seconds / (60 * 60 * 24 * 7));
                    unit = this.props.customLabel.week;
                } else if (seconds < 60 * 60 * 24 * 365) {
                    value = Math.round(seconds / (60 * 60 * 24 * 30));
                    unit = this.props.customLabel.month;
                } else {
                    value = Math.round(seconds / (60 * 60 * 24 * 365));
                    unit = this.props.customLabel.year;
                }
                var _fullDate = moment(this.props.date);
                var newProps = _.assign({}, _others, {
                    title: _fullDate.format(this.props.loseFormat)
                });
                return React.createElement(this.props.component, newProps, this.props.formatter(value, unit, suffix, then));
            }
        }
    }]);

    return Timeago;
}(React.Component);
Timeago.defaultProps = new typings.Props();
Timeago = __decorate([index_1.TransmitTransparently()], Timeago);
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = Timeago;