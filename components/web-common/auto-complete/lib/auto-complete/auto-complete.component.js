"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var ReactDOM = require("react-dom");
var typings = require("./auto-complete.type");
var classNames = require("classnames");
var $ = require("jquery");
var index_1 = require('nt-web-input');
var index_2 = require('nt-transmit-transparently');
var interval = null;
var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};
require("./auto-complete.css");
var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete() {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(AutoComplete, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            this.dom = ReactDOM.findDOMNode(this);
            this._isMounted = true;
            this.handleDocumentClick = function (event) {
                if (!_this2._isMounted) return;
                if (!$.contains(_this2.dom, event.target)) {
                    _this2.setState({
                        showComplete: false
                    });
                }
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._isMounted = true;
            this.dom = ReactDOM.findDOMNode(this);
            $(document).on('click', this.handleDocumentClick);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._isMounted = false;
            $(document).off('click', this.handleDocumentClick);
        }
    }, {
        key: "handleFocus",
        value: function handleFocus() {
            this.setState({
                showComplete: true
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(value) {
            var _this3 = this;

            this.setState({
                value: value
            });
            this.searchValue = value;
            if (this.props.url !== '') {
                clearInterval(interval);
                interval = setTimeout(function () {
                    $.ajax({
                        url: _this3.props.url,
                        method: _this3.props.method,
                        data: _this3.props.beforeSend(value)
                    }).done(function (res) {
                        var datas = _this3.props.complete(res);
                        _this3.setState({
                            datas: datas,
                            filterDatas: _this3.filterDatas(datas),
                            selectIndex: -1,
                            showComplete: true
                        });
                    });
                }, this.props.delay);
            } else {
                this.setState({
                    datas: this.props.datas,
                    filterDatas: this.filterDatas(this.props.datas),
                    selectIndex: -1,
                    showComplete: true
                });
            }
        }
    }, {
        key: "filterDatas",
        value: function filterDatas(datas) {
            var _this4 = this;

            var newDatas = [];
            var count = 0;
            datas.map(function (item, index) {
                var regex = reg(_this4.searchValue);
                if (_this4.searchValue === '' || _this4.props.autoFilter && !regex.test(item[_this4.props.parse.text])) {
                    return;
                }
                count++;
                if (count > _this4.props.maxNumber) {
                    return;
                }
                newDatas.push(item);
            });
            return newDatas;
        }
    }, {
        key: "handleSelect",
        value: function handleSelect(text, value, index) {
            var _this5 = this;

            var close = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
            var realSelect = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

            this.setState({
                value: text,
                selectIndex: index,
                showComplete: !close
            }, function () {
                if (realSelect) {
                    _this5.props.onSelect(value);
                }
            });
        }
    }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
            var _this6 = this;

            if (this.state.filterDatas.length === 0) return;
            switch (event.keyCode) {
                case 40:
                    var newUpIndex = this.state.selectIndex + 1;
                    if (newUpIndex > this.state.filterDatas.length - 1) {
                        newUpIndex = 0;
                    }
                    this.handleSelect(this.state.filterDatas[newUpIndex][this.props.parse.text], this.state.filterDatas[newUpIndex][this.props.parse.value], newUpIndex, false, false);
                    break;
                case 38:
                    var newDownIndex = this.state.selectIndex - 1;
                    if (newDownIndex < 0) {
                        newDownIndex = this.state.filterDatas.length - 1;
                    }
                    this.handleSelect(this.state.filterDatas[newDownIndex][this.props.parse.text], this.state.filterDatas[newDownIndex][this.props.parse.value], newDownIndex, false, false);
                    break;
                case 13:
                    var hasFind = false;
                    this.state.filterDatas.map(function (item) {
                        if (item[_this6.props.parse.text] === _this6.state.value) {
                            hasFind = true;
                        }
                    });
                    if (!hasFind) return;
                    this.handleSelect(this.state.filterDatas[this.state.selectIndex][this.props.parse.text], this.state.filterDatas[this.state.selectIndex][this.props.parse.value], this.state.selectIndex, true, true);
            }
        }
    }, {
        key: "innerRender",
        value: function innerRender(items, isEmpty) {
            var style = {
                display: this.state.showComplete && !isEmpty ? 'block' : null
            };
            return React.createElement("div", { className: "complete-container", style: style }, items);
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            var _props = this.props;
            var className = _props.className;
            var parse = _props.parse;

            var classes = classNames(_defineProperty({
                'nt-web-auto-complete-auto_complete': true
            }, this.props['className'], !!this.props['className']));
            var isEmpty = true;
            var Items = this.state.filterDatas.map(function (item, index) {
                var itemClass = classNames({
                    'item': true,
                    'active': index === _this7.state.selectIndex
                });
                var regex = reg(_this7.searchValue);
                var matchedString = item[parse.text].replace(regex, '<span class="autocomplete-highlight">' + _this7.searchValue + '</span>');
                isEmpty = false;
                return React.createElement("div", { onClick: _this7.handleSelect.bind(_this7, item[parse.text], item[parse.value], index, true, true), key: index, className: itemClass, dangerouslySetInnerHTML: { __html: matchedString } });
            });
            return React.createElement(index_1.default, __assign({}, this.props.others, { className: classes, onFocus: this.handleFocus.bind(this), value: this.state.value, onKeyDown: this.handleKeyDown.bind(this), onChange: this.handleChange.bind(this), innerRender: this.innerRender.bind(this, Items, isEmpty), autoComplete: "off" }));
        }
    }]);

    return AutoComplete;
}(React.Component);
AutoComplete.defaultProps = new typings.Props();
AutoComplete = __decorate([index_2.TransmitTransparently()], AutoComplete);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AutoComplete;