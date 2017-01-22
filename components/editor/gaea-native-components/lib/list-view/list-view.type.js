"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index_1 = require('gaea-helper');
var ReactNaitve = require("react-native");

var PropsGaea = function PropsGaea() {
    (0, _classCallCheck3.default)(this, PropsGaea);

    this.gaeaName = 'ListView';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'gaea-list-view';
    this.canDragIn = true;
    this.gaeaEdit = ['ListView', {
        field: 'apiUrl',
        label: '请求接口地址',
        editor: 'text'
    }, {
        field: 'listPath',
        label: '使用字段路径',
        editor: 'text'
    }, '布局', index_1.gaeaHelper.marginPaddingEditor, index_1.gaeaHelper.widthHeightEditor];
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    (0, _inherits3.default)(Props, _PropsGaea);

    function Props() {
        (0, _classCallCheck3.default)(this, Props);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this.style = (0, _extends3.default)({}, index_1.gaeaHelper.marginPadding, index_1.gaeaHelper.opacity, index_1.gaeaHelper.widthHeight);
        _this.apiUrl = '';
        _this.listPath = '';
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);

    this.dataSource = new ReactNaitve.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
            return r1 !== r2;
        } });
    this.initRequestFinished = false;
    this.fetching = false;
    this.hasMore = false;
    this.page = null;
    this.lists = [];
};

exports.State = State;