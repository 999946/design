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
var typings = require("./text-input.type");
var react_native_1 = require("react-native");

var TextInputComponent = function (_React$Component) {
    (0, _inherits3.default)(TextInputComponent, _React$Component);

    function TextInputComponent() {
        (0, _classCallCheck3.default)(this, TextInputComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TextInputComponent.__proto__ || Object.getPrototypeOf(TextInputComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(TextInputComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(react_native_1.TextInput, { style: this.props.style, value: this.props.text });
        }
    }]);
    return TextInputComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInputComponent;
TextInputComponent.defaultProps = new typings.Props();