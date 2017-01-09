"use strict";

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropsGaea = function PropsGaea() {
    (0, _classCallCheck3.default)(this, PropsGaea);

    this.gaeaName = '标签页';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'nt-web-tabs';
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    (0, _inherits3.default)(Props, _PropsGaea);

    function Props() {
        (0, _classCallCheck3.default)(this, Props);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this.activeKey = '';
        _this.tab = '';
        _this.active = false;
        _this.tabRender = function () {
            return null;
        };
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);
};

exports.State = State;