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

var React = require("react");
var typings = require("../list-view.type");
var _ = require("lodash");
var react_native_1 = require("react-native");

var ImageComponent = function (_React$Component) {
    (0, _inherits3.default)(ImageComponent, _React$Component);

    function ImageComponent() {
        (0, _classCallCheck3.default)(this, ImageComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).apply(this, arguments));

        _this.state = new typings.State();
        _this.getRefreshControl = function () {
            if (react_native_1.Platform.OS === 'web') {
                return null;
            }
            return React.createElement(react_native_1.RefreshControl, { onRefresh: _this.handleTopRefresh, refreshing: false });
        };
        _this.handleTopRefresh = function () {
            _this.fetchTop();
        };
        _this.handleListviewEndReached = function () {
            if (!_this.state.initRequestFinished) {
                return;
            }
            if (_this.state.fetching) {
                return;
            }
            if (!_this.state.hasMore) {
                return;
            }
            _this.fetchMore();
        };
        _this.renderRow = function (rowData) {
            return React.Children.map(_this.props.children, function (child) {
                return React.cloneElement(child, {
                    gaeaData: rowData
                });
            });
        };
        return _this;
    }

    (0, _createClass3.default)(ImageComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.fetchTop();
        }
    }, {
        key: "getListViewData",
        value: function getListViewData(data) {
            if (this.props.listPath === '') {
                return data;
            }
            return _.get(data, this.props.listPath);
        }
    }, {
        key: "fetchMore",
        value: function fetchMore() {
            var _this2 = this;

            this.setState({
                fetching: true
            });
            fetch(this.props.apiUrl + '?pn=' + (this.state.page + 1) + '&rn=20', {
                mode: 'cors'
            }).then(function (res) {
                res.json().then(function (data) {
                    var listData = _this2.getListViewData(data);
                    if (!listData) {
                        return;
                    }
                    var mergeList = _this2.state.lists.concat(listData.list);
                    _this2.setState({
                        dataSource: _this2.state.dataSource.cloneWithRows(mergeList),
                        lists: mergeList,
                        initRequestFinished: true,
                        page: _this2.state.page + 1,
                        hasMore: listData.page && listData.page.has_more,
                        fetching: false
                    });
                });
            }).catch(function (reason) {
                console.warn('Gaea request failed:', reason);
            });
        }
    }, {
        key: "fetchTop",
        value: function fetchTop() {
            var _this3 = this;

            this.setState({
                fetching: true
            });
            fetch(this.props.apiUrl + '?pn=1&rn=20', {
                mode: 'cors'
            }).then(function (res) {
                res.json().then(function (data) {
                    var listData = _this3.getListViewData(data);
                    if (!listData) {
                        return;
                    }
                    _this3.setState({
                        dataSource: _this3.state.dataSource.cloneWithRows(data),
                        lists: listData.list,
                        initRequestFinished: true,
                        page: 1,
                        hasMore: listData.page && listData.page.has_more,
                        fetching: false
                    });
                });
            }).catch(function (reason) {
                console.warn('Gaea request failed:', reason);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(react_native_1.ListView, { style: this.props.style, dataSource: this.state.dataSource, refreshControl: this.getRefreshControl(), onEndReached: this.handleListviewEndReached, renderRow: this.renderRow });
        }
    }]);
    return ImageComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageComponent;
ImageComponent.defaultProps = new typings.Props();