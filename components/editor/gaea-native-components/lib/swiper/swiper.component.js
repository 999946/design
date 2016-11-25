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
var typings = require("./swiper.type");
var index_1 = require('nt-swiper');

var SwiperComponent = function (_React$Component) {
    (0, _inherits3.default)(SwiperComponent, _React$Component);

    function SwiperComponent() {
        (0, _classCallCheck3.default)(this, SwiperComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SwiperComponent.__proto__ || Object.getPrototypeOf(SwiperComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(SwiperComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(index_1.default, { maxDistance: this.props.maxDistance, threshold: this.props.threshold, thresholdSpeed: this.props.thresholdSpeed, style: this.props.style }, this.props.children);
        }
    }]);
    return SwiperComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SwiperComponent;
SwiperComponent.defaultProps = new typings.Props();