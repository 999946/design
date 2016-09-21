"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var typings = require('./opt-group.type');
var classNames = require('classnames');
require('./opt-group.css');

var OptGroup = function (_React$Component) {
    _inherits(OptGroup, _React$Component);

    function OptGroup() {
        var _ref;

        _classCallCheck(this, OptGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = OptGroup.__proto__ || Object.getPrototypeOf(OptGroup)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(OptGroup, [{
        key: 'handleOptionClick',
        value: function handleOptionClick(value, label) {
            this.props.onClick(value, label);
        }
    }, {
        key: 'setLabelValue',
        value: function setLabelValue(labelValue) {
            this.props.setLabelValue(labelValue);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = classNames(_defineProperty({
                'nt-web-select-opt_group': true
            }, this.props.className, !!this.props.className));
            var Children = this.props.children;
            if (!this.props.ignoreChildren) {
                Children = React.Children.map(this.props.children, function (item, index) {
                    var active = false;
                    if (item.props.value === _this2.props.activeValue) {
                        active = true;
                    }
                    return React.cloneElement(item, _extends({}, item.props, {
                        onClick: _this2.handleOptionClick.bind(_this2),
                        key: index,
                        active: active,
                        setLabelValue: _this2.setLabelValue.bind(_this2),
                        activeValue: _this2.props.activeValue,
                        searchValue: _this2.props.searchValue
                    }));
                });
            }
            return React.createElement("div", { className: classes }, React.createElement("li", { className: "group-result" }, this.props.label), Children);
        }
    }]);

    return OptGroup;
}(React.Component);

OptGroup.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OptGroup;