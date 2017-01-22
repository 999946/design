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
var typings = require("./view.type");
var react_native_1 = require("react-native");

var ViewComponent = function (_React$Component) {
    (0, _inherits3.default)(ViewComponent, _React$Component);

    function ViewComponent() {
        (0, _classCallCheck3.default)(this, ViewComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ViewComponent.__proto__ || Object.getPrototypeOf(ViewComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(ViewComponent, [{
        key: "renderChildren",
        value: function renderChildren() {
            var _this2 = this;

            return React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {
                    gaeaData: _this2.props.gaeaData
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var hasClick = false;
            if (this.props.gaeaEventData) {
                this.props.gaeaEventData.forEach(function (data) {
                    if (data.typeIndex > -1 && _this3.props.gaeaEvent.triggers[data.typeIndex].selfCallback && data.type === 'onClick') {
                        hasClick = true;
                    }
                });
            }
            if (!this.props.gaeaPreview) {
                return React.createElement(react_native_1.View, { style: this.props.style }, this.renderChildren());
            }
            if (hasClick) {
                return React.createElement(react_native_1.TouchableWithoutFeedback, { style: this.props.style, onPress: this.props.onClick.bind(this) }, React.createElement(react_native_1.View, { style: this.props.style }, this.renderChildren()));
            }
            return React.createElement(react_native_1.View, { style: this.props.style }, this.renderChildren());
        }
    }]);
    return ViewComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewComponent;
ViewComponent.defaultProps = new typings.Props();