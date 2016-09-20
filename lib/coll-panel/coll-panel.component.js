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
var ReactDOM = require('react-dom');
var $ = require('jquery');
var classNames = require('classnames');
var typings = require('./coll-panel.type');
var index_1 = require('nt-transmit-transparently');
require('./coll-panel.css');
var Collapse = function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse(props) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

        _this.state = new typings.State();
        _this.toggleTimeout = null;
        return _this;
    }

    _createClass(Collapse, [{
        key  : "componentDidMount",
        value: function componentDidMount() {
            this.$dom = $(ReactDOM.findDOMNode(this));
            this.setState({
                contentHeight: this.$dom.find('[data-fit-coll-content]').outerHeight()
            });
        }
    }, {
        key  : "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            this.setState({
                contentHeight: this.$dom.find('[data-fit-coll-content]').outerHeight()
            });
        }
    }, {
        key  : "handleClick",
        value: function handleClick() {
            var _this2 = this;

            this.setState({
                finish: false
            }, function () {
                _this2.props.onChange(_this2.props.activeKey);
            });
            if (this.toggleTimeout) {
                clearTimeout(this.toggleTimeout);
            }
            this.toggleTimeout = setTimeout(function () {
                _this2.setState({
                    finish: true
                });
            }, 300);
        }
    }, {
        key  : "render",
        value: function render() {
            var classes = classNames(_defineProperty({
                'nt-web-collapse-coll_panel': true,
                'panel'                     : true,
                'panel-default'             : true
            }, this.props.className, !!this.props.className));
            var panelCollapseClass = classNames({
                'panel-collapse': true,
                'collapse'      : true,
                'in'            : true,
                'show'          : this.props.active
            });
            var rightChevronClass = classNames({
                'fa'              : true,
                'fa-chevron-right': true,
                'rotate-pre'      : true,
                'rotate'          : this.props.active
            });
            var height = null;
            height = this.props.active ? this.state.contentHeight : null;
            if (this.state.finish) {
                if (this.props.active) {
                    height = 'auto';
                } else {
                    height = 0;
                }
            }
            var contentContainerStyle = {
                height: height
            };
            this.height = height;
            return React.createElement("div", __assign({}, this.props.others, {className: classes}), React.createElement("div", {
                className: "panel-heading",
                onClick  : this.handleClick.bind(this)
            }, React.createElement("i", {
                className: rightChevronClass,
                style    : {marginRight: 5}
            }), this.props.header), React.createElement("div", {
                className: panelCollapseClass,
                style    : contentContainerStyle
            }, React.createElement("div", {"data-fit-coll-content": true}, this.props.children)));
        }
    }]);

    return Collapse;
}(React.Component);
Collapse.defaultProps = new typings.Props();
Collapse = __decorate([index_1.TransmitTransparently()], Collapse);
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = Collapse;