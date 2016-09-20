"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var typings = require('./message.type');
var classNames = require('classnames');
require('./message.css');

var Message = function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message() {
        var _ref;

        _classCallCheck(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Message, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                status: 'enter'
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.setState({
                status: 'leave'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = classNames(_defineProperty({
                'lywrap': true
            }, this.state.status, !!this.state.status));
            var typeClass = classNames(_defineProperty({
                'lyct': true
            }, this.props.type, true));
            return React.createElement("div", { className: "nt-web-message-message" }, React.createElement("div", { className: "m-layer z-show" }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("div", { className: classes }, React.createElement("div", { className: typeClass }, this.props.content))))))));
        }
    }], [{
        key: 'show',
        value: function show(content) {
            var duration = arguments.length <= 1 || arguments[1] === undefined ? 1.5 : arguments[1];
            var type = arguments[2];
            var onClose = arguments[3];

            var instance = Message.newInstance({
                content: content,
                type: type
            });
            setTimeout(function () {
                if (instance) {
                    instance.destroy();
                }
                onClose && onClose();
            }, duration * 1000);
        }
    }, {
        key: 'info',
        value: function info(content, duration, onClose) {
            return Message.show(content, duration, 'info', onClose);
        }
    }, {
        key: 'success',
        value: function success(content, duration, onClose) {
            return Message.show(content, duration, 'success', onClose);
        }
    }, {
        key: 'error',
        value: function error(content, duration, onClose) {
            return Message.show(content, duration, 'error', onClose);
        }
    }, {
        key: 'warning',
        value: function warning(content, duration, onClose) {
            return Message.show(content, duration, 'warning', onClose);
        }
    }]);

    return Message;
}(React.Component);

Message.defaultProps = new typings.Props();
Message.newInstance = function (props) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var reactElement = React.createElement(Message, props);
    var reactInstance = ReactDOM.render(reactElement, div);
    return {
        destroy: function destroy() {
            reactInstance.destroy();
            setTimeout(function () {
                ReactDOM.unmountComponentAtNode(div);
                document.body.removeChild(div);
            }, 200);
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Message;