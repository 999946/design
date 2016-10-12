"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var typings = require("./button.type");
var index_1 = require("../../../common/button/index");
var button_style_1 = require("./button.style");

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var extStyle = {
                borderRadius: this.props.size / 2,
                height: this.props.size
            };
            var extTextStyle = {
                fontSize: this.props.fontSize
            };
            return React.createElement(index_1.default, { onPress: this.props.onPress, style: [button_style_1.default.btn, extStyle, button_style_1.default[this.props.type], this.props.style], activeStyle: button_style_1.default.activeBtn, textStyle: [button_style_1.default.text, extTextStyle, button_style_1.default[this.props.type], this.props.textStyle], activeTextStyle: button_style_1.default.activeText }, this.props.children);
        }
    }]);

    return Button;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
Button.defaultProps = new typings.Props();