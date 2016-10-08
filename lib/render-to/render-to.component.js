"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var typings = require('./render-to.type');

var RenderTo = function (_React$Component) {
    _inherits(RenderTo, _React$Component);

    function RenderTo(props) {
        _classCallCheck(this, RenderTo);

        var _this = _possibleConstructorReturn(this, (RenderTo.__proto__ || Object.getPrototypeOf(RenderTo)).call(this, props));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(RenderTo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.popups = [];
            var selector = document.querySelectorAll(this.props.selector);
            Array.prototype.slice.call(selector).forEach(function (parent) {
                var popup = document.createElement('div');
                parent.appendChild(popup);
                _this2.popups.push(popup);
            });
            this.renderLayer();
            this.selectorLength = selector.length;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderLayer();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this3 = this;

            this.popups.forEach(function (popup) {
                ReactDOM.unmountComponentAtNode(popup);
            });
            var selector = document.querySelectorAll(this.props.selector);
            if (selector.length !== this.selectorLength) {
                console.warn('selector amount had been changed!');
            }
            Array.prototype.slice.call(document.querySelectorAll(this.props.selector)).forEach(function (parent) {
                var popup = _this3.popups.shift();
                parent.removeChild(popup);
            });
        }
    }, {
        key: 'renderLayer',
        value: function renderLayer() {
            var _this4 = this;

            this.popups.forEach(function (popup) {
                ReactDOM.render(_this4.props.children, popup);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return RenderTo;
}(React.Component);

RenderTo.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RenderTo;