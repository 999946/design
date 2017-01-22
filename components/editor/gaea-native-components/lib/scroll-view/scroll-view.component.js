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
var typings = require("./scroll-view.type");
var react_native_1 = require("react-native");

var ScrollViewComponent = function (_React$Component) {
    (0, _inherits3.default)(ScrollViewComponent, _React$Component);

    function ScrollViewComponent() {
        (0, _classCallCheck3.default)(this, ScrollViewComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollViewComponent.__proto__ || Object.getPrototypeOf(ScrollViewComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(ScrollViewComponent, [{
        key: "render",
        value: function render() {
            delete this.props.style.justifyContent;
            delete this.props.style.alignItems;
            return React.createElement(react_native_1.ScrollView, { horizontal: this.props.horizontal, onScroll: this.props.onScroll, scrollEventThrottle: this.props.scrollEventThrottle, style: this.props.style }, this.props.children);
        }
    }]);
    return ScrollViewComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrollViewComponent;
ScrollViewComponent.defaultProps = new typings.Props();