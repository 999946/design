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

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var React = require("react");
var typings = require("./view-absolute.type");
var view_component_1 = require("../view/view.component");

var ViewComponent = function (_React$Component) {
    (0, _inherits3.default)(ViewComponent, _React$Component);

    function ViewComponent() {
        (0, _classCallCheck3.default)(this, ViewComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ViewComponent.__proto__ || Object.getPrototypeOf(ViewComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(ViewComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(view_component_1.default, __assign({}, this.props), this.props.children);
        }
    }]);
    return ViewComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewComponent;
ViewComponent.defaultProps = new typings.Props();