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
var typings = require('./option.type');
var classNames = require('classnames');
var _ = require('lodash');
var index_1 = require('nt-transmit-transparently');
require('./option.css');
var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select() {
        var _ref;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Select, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.value === this.props.activeValue) {
                this.props.setLabelValue(this.props.children.toString());
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (this.props.disabled) return;
            this.props.onClick(this.props.value, this.props.children.toString(), this.props.optChildren, this.props.zIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = classNames(_defineProperty({
                'nt-web-select-option': true,
                'active': this.props.active,
                'disabled': this.props.disabled
            }, this.props.className, !!this.props.className));
            if (!_.isEmpty(this.props.searchValue)) {
                var regex = reg(_.escape(this.props.searchValue.toString()));
                if (regex.test(this.props.children.toString())) {
                    var matchedString = _.escape(this.props.children.toString()).replace(regex, '<span class="active">' + this.props.searchValue + '</span>');
                    return React.createElement("li", { onClick: this.handleClick.bind(this), className: classes, dangerouslySetInnerHTML: { __html: matchedString } });
                } else {
                    return null;
                }
            }
            return React.createElement("li", __assign({}, index_1.others(new typings.Props(), this.props), { onClick: this.handleClick.bind(this), className: classes }), this.props.children);
        }
    }]);

    return Select;
}(React.Component);

Select.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Select;