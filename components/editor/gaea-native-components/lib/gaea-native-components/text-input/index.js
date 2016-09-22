"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
var React = require('react');
var _module = require('./module');
var index_1 = require('nt-transmit-transparently');

var _require = require('react-native');

var TextInput = _require.TextInput;

var TextInputComponent = function (_React$Component) {
    _inherits(TextInputComponent, _React$Component);

    function TextInputComponent() {
        var _ref;

        _classCallCheck(this, TextInputComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TextInputComponent.__proto__ || Object.getPrototypeOf(TextInputComponent)).call.apply(_ref, [this].concat(args)));

        _this.state = new _module.State();
        return _this;
    }

    _createClass(TextInputComponent, [{
        key: 'render',
        value: function render() {
            var style = {
                fontSize: this.props.fontSize,
                width: this.props.width,
                height: this.props.height,
                flex: this.props.flex
            };
            var otherProps = index_1.others(new _module.Props(), this.props);
            var customProps = {
                placeholder: this.props.placeholder
            };
            return React.createElement(TextInput, __assign({}, otherProps, { style: style }, customProps));
        }
    }]);

    return TextInputComponent;
}(React.Component);

TextInputComponent.defaultProps = new _module.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInputComponent;
//# sourceMappingURL=index.js.map