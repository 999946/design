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
var typings = require('./select.type');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var $ = require('jquery');
var _ = require('lodash');
var index_1 = require('nt-web-input');
var index_2 = require('nt-transmit-transparently');
var option_component_1 = require('../option/option.component');
var opt_group_component_1 = require('../opt-group/opt-group.component');
require('./select.css');

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Select, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.setState({
                value: this.props.value !== '' ? this.props.value : this.props.defaultValue
            });
            this.handleDocumentClick = function (event) {
                if (!_this2._isMounted) return;
                if (!$.contains(_this2.dom, event.target)) {
                    _this2.setState({
                        open: false
                    });
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps && nextProps.value !== null) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._isMounted = true;
            this.dom = ReactDOM.findDOMNode(this);
            $(document).on('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
            $(document).off('click', this.handleDocumentClick);
        }
    }, {
        key: 'handleSelectClick',
        value: function handleSelectClick() {
            var _this3 = this;

            this.setState({
                open: !this.state.open
            }, function () {
                if (_this3.state.open) {
                    $(_this3.dom).find('#j-search').focus();
                }
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(value, label, children) {
            var _this4 = this;

            var zIndex = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];

            if (!children) {
                var newValue = this.state.value;
                var newCascader = this.state.cascader;
                var deleteEndNumber = newCascader.length - zIndex + 1;
                while (deleteEndNumber > 0) {
                    newCascader.pop();
                    deleteEndNumber = deleteEndNumber - 1;
                }
                if (zIndex === 1) {
                    newValue = value;
                    this.firstLabelValue = label;
                } else {
                    newCascader[zIndex - 2].value = value;
                    newCascader[zIndex - 2].labelValue = label;
                }
                this.setState({
                    cascader: newCascader
                });
                var labelValue = label;
                if (this.props.cascaderFull) {
                    (function () {
                        var labelValueArray = [_this4.firstLabelValue];
                        _this4.state.cascader.forEach(function (item) {
                            labelValueArray.push(item.labelValue);
                        });
                        labelValue = labelValueArray.join(' / ');
                    })();
                }
                this.setState({
                    open: false,
                    value: newValue,
                    labelValue: labelValue
                }, function () {
                    if (_this4.props.cascaderFull) {
                        (function () {
                            var pathArray = [_this4.state.value];
                            _this4.state.cascader.forEach(function (item) {
                                pathArray.push(item.value);
                            });
                            _this4.props.onChange(pathArray);
                        })();
                    } else {
                        _this4.props.onChange(value);
                    }
                });
            } else {
                var _newCascader = this.state.cascader;
                if (zIndex === 1) {
                    this.firstLabelValue = label;
                    this.setState({
                        value: value
                    });
                } else {
                    var _newCascader2 = this.state.cascader;
                    _newCascader2[zIndex - 2].value = value;
                    _newCascader2[zIndex - 2].labelValue = label;
                    this.setState({
                        cascader: _newCascader2
                    });
                }
                this.setState({
                    labelValue: ''
                });
                if (_newCascader.length = zIndex - 1) {
                    _newCascader.push({
                        value: '',
                        options: children
                    });
                } else {
                    _newCascader[zIndex - 1] = {
                        value: value,
                        options: children
                    };
                    var _deleteEndNumber = _newCascader.length - zIndex;
                    while (_deleteEndNumber > 0) {
                        _newCascader.pop();
                        _deleteEndNumber = _deleteEndNumber - 1;
                    }
                }
                this.setState({
                    cascader: _newCascader
                });
            }
        }
    }, {
        key: 'handleSearchChange',
        value: function handleSearchChange(event) {
            this.setState({
                searchValue: event.target.value
            });
        }
    }, {
        key: 'handleSetLabelValue',
        value: function handleSetLabelValue(labelValue) {
            this.setState({
                labelValue: labelValue
            });
        }
    }, {
        key: 'getOptionChildren',
        value: function getOptionChildren() {
            var _this5 = this;

            var chosenDropStyle = {
                display: this.state.open ? null : 'none',
                left: 0
            };
            var Children = React.Children.map(this.props['children'], function (item, index) {
                var active = false;
                if (item.props.value === _this5.state.value) {
                    active = true;
                }
                if (_.isArray(item.props.children)) {
                    item.props.children.map(function (childItem) {
                        if (childItem.props.value === _this5.state.value) {
                            active = true;
                        }
                    });
                }
                return React.cloneElement(item, {
                    onClick: _this5.handleClick.bind(_this5),
                    key: index,
                    active: active,
                    setLabelValue: _this5.handleSetLabelValue.bind(_this5),
                    activeValue: _this5.state.value,
                    searchValue: _this5.state.searchValue
                });
            });
            var Search = null;
            if (this.props.search) {
                Search = React.createElement("div", { className: "chosen-search" }, React.createElement(index_1.default, { id: "j-search", className: "search-input", label: "", placeholder: "搜索..", autoComplete: "off", onChange: this.handleSearchChange.bind(this) }));
            }
            return React.createElement("div", { id: "j-chosen", className: "chosen-drop", style: chosenDropStyle }, Search, React.createElement("ul", { className: "chosen-results" }, Children));
        }
    }, {
        key: 'getOptionChildrenByOptions',
        value: function getOptionChildrenByOptions() {
            var _this6 = this;

            var chosenDropStyle = {
                display: this.state.open ? null : 'none',
                left: 0
            };
            var OptionChildren = this.props.options.map(function (item, index) {
                return _this6.getOptionItemByType(item, index, _this6.state.value, 1);
            });
            var CascaderChildrens = this.state.cascader.map(function (item, index) {
                var options = item.options.map(function (childrenItem, childrenItemIndex) {
                    return _this6.getOptionItemByType(childrenItem, childrenItemIndex, item.value, index + 2);
                });
                return React.createElement("ul", { key: index, className: "chosen-results" }, options);
            });
            return React.createElement("div", { id: "j-chosen", className: "chosen-drop", style: chosenDropStyle }, React.createElement("div", { className: "flex-option-container" }, React.createElement("ul", { className: "chosen-results" }, OptionChildren), CascaderChildrens));
        }
    }, {
        key: 'getOptionItemByType',
        value: function getOptionItemByType(item, key, activeValue) {
            var _this7 = this;

            var zIndex = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];

            if (item.groupValue) {
                var GroupChildren = item.children.map(function (item, index) {
                    return _this7.getOptionItemByType(item, index, activeValue, zIndex);
                });
                return React.createElement(opt_group_component_1.default, { key: key, ignoreChildren: true, label: item.groupValue }, GroupChildren);
            }
            var active = false;
            if (item.key === activeValue) {
                active = true;
            }
            return React.createElement(option_component_1.default, { key: key, value: item.key, onClick: this.handleClick.bind(this), active: active, zIndex: zIndex, optChildren: item.children, setLabelValue: this.handleSetLabelValue.bind(this), activeValue: this.state.value, searchValue: this.state.searchValue }, item.value);
        }
    }, {
        key: 'dropIconRender',
        value: function dropIconRender() {
            var classes = classNames({
                'open': this.state.open,
                'fit-select-drop': true
            });
            return React.createElement("i", { className: classes });
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = classNames(_defineProperty({
                'nt-web-select-select': true,
                'simple': this.props.simple
            }, this.props.className, !!this.props.className));
            var renderChosen = void 0;
            if (this.props.options.length === 0) {
                renderChosen = this.getOptionChildren.bind(this);
            } else {
                renderChosen = this.getOptionChildrenByOptions.bind(this);
            }
            var extProps = {};
            if (this.props.simple) {
                extProps.label = '';
                extProps.placeholder = '';
            }
            if (this.props.search) {
                extProps.highlightLine = false;
            }
            return React.createElement(index_1.default, __assign({}, index_2.others(new typings.Props(), this.props, ['children']), extProps, { onClick: this.handleSelectClick.bind(this), className: classes, value: this.state.labelValue, rightRender: this.dropIconRender.bind(this), innerRender: renderChosen }));
        }
    }]);

    return Select;
}(React.Component);

Select.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Select;