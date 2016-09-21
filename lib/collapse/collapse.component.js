"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var React = require('react');
var typings = require('./collapse.type');
var classNames = require('classnames');
var _ = require('lodash');
var arrayOrStrEqual = function arrayOrStrEqual(item, arr) {
    if (_.isArray(arr)) {
        return _.indexOf(arr, item) !== -1;
    }
    return item === arr;
};

var Collapse = function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse(props) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Collapse, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var activeKey = this.props.value || this.props.defaultValue;
            if (!this.props.accordion && !_.isArray(activeKey)) {
                activeKey = [activeKey];
            }
            this.setState({
                value: activeKey
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                var activeKey = nextProps.value || nextProps.defaultValue;
                if (!this.props.accordion && !_.isArray(activeKey)) {
                    activeKey = [activeKey];
                }
                this.setState({
                    value: activeKey
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(key) {
            var _this2 = this;

            var activeKey = this.state.value;
            if (!this.props.accordion) {
                if (_.isArray(activeKey)) {
                    if (_.indexOf(activeKey, key) !== -1) {
                        _.pull(activeKey, key);
                    } else {
                        activeKey.push(key);
                    }
                } else {
                    activeKey = key;
                }
            } else {
                if (activeKey === key) {
                    activeKey = null;
                } else {
                    activeKey = key;
                }
            }
            this.setState({
                value: activeKey
            }, function () {
                _this2.props.onChange(key);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var classes = classNames(_defineProperty({
                'nt-web-collapse-collapse': true
            }, this.props.className, !!this.props.className));
            var Children = React.Children.map(this.props.children, function (item) {
                return React.cloneElement(item, {
                    active: arrayOrStrEqual(item.key, _this3.state.value),
                    onChange: _this3.handleChange.bind(_this3),
                    key: item.key,
                    activeKey: item.key
                });
            });
            return React.createElement("div", __assign({}, this.props.others, { className: classes }), Children);
        }
    }]);

    return Collapse;
}(React.Component);

Collapse.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Collapse;