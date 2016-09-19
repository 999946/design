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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

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
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var React = require('react');
var typings = require('./switch.type');
var classNames = require('classnames');
var index_1 = require('nt-transmit-transparently');
require('./switch.css');
var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch() {
        var _ref;

        _classCallCheck(this, Switch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Switch, [{
        key  : "componentWillMount",
        value: function componentWillMount() {
            var checked = false;
            if (this.props.defaultChecked !== null) {
                checked = this.props.defaultChecked;
            }
            if (this.props.checked !== null) {
                checked = this.props.checked;
            }
            this.state = {
                checked: checked
            };
        }
    }, {
        key  : "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checked !== null) {
                this.setState({
                    checked: nextProps.checked
                });
            }
        }
    }, {
        key  : "toggle",
        value: function toggle() {
            var checked = !this.state.checked;
            this.setState({
                checked: checked
            });
            this.props.onChange(checked);
        }
    }, {
        key  : "render",
        value: function render() {
            var _classNames;

            var switchClassName = classNames((_classNames = {
                'nt-web-switch-switch': true
            }, _defineProperty(_classNames, this.props.className, !!this.props.className), _defineProperty(_classNames, 'checked', this.state.checked), _defineProperty(_classNames, 'disabled', this.props.disabled), _defineProperty(_classNames, this.props.type || 'info', true), _defineProperty(_classNames, "size-" + (this.props.size || 'normal'), true), _classNames));
            var Switch = React.createElement("span", __assign({}, this.props.others, {
                className: switchClassName,
                onClick  : this.props.disabled ? null : this.toggle.bind(this)
            }), React.createElement("span", {className: "inner"}, this.state.checked ? this.props.checkedChildrenRender : this.props.unCheckedChildrenRender));
            return Switch;
        }
    }]);

    return Switch;
}(React.Component);
Switch.defaultProps = new typings.Props();
Switch = __decorate([index_1.TransmitTransparently()], Switch);
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = Switch;