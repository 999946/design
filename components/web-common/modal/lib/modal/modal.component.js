"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var ReactDOM = require('react-dom');
var typings = require('./modal.type');
var classNames = require('classnames');
var index_1 = require('nt-web-button');
var index_2 = require('nt-transmit-transparently');
require('./modal.css');
var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        var _ref;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Modal, [{
        key: "handleOk",
        value: function handleOk() {
            this.props.onOk();
        }
    }, {
        key: "handleCancel",
        value: function handleCancel() {
            this.props.onCancel();
        }
    }, {
        key: "handleOutClick",
        value: function handleOutClick() {
            if (!this.props.backdropClickToClose) return;
            this.handleCancel();
        }
    }, {
        key: "handleModalClick",
        value: function handleModalClick(event) {
            event.stopPropagation();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.modalDom = document.createElement('div');
            document.body.appendChild(this.modalDom);
            this.renderModalDom();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.renderModalDom();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.body.removeChild(this.modalDom);
        }
    }, {
        key: "renderModalDom",
        value: function renderModalDom() {
            var classes = classNames(_defineProperty({
                'nt-web-modal-modal': true,
                'modal': true,
                'fade': true,
                'in': true
            }, this.props.className, !!this.props.className));
            var others = _extends({}, this.props.others);
            others.style = others.style || {};
            others.style.display = this.props.show ? 'block' : null;
            var extraModalSizeClass = classNames({
                'modal-dialog': true,
                'modal-lg': this.props.size === 'large',
                'modal-sm': this.props.size === 'small'
            });
            var ModalElement = React.createElement("div", __assign({}, others, { className: classes, onClick: this.handleOutClick.bind(this), tabIndex: "-1" }), React.createElement("div", { className: extraModalSizeClass, onClick: this.handleModalClick.bind(this) }, React.createElement("div", { className: "modal-content" }, this.props.title === '' ? null : React.createElement("div", { className: "modal-header" }, React.createElement("button", { type: "button", className: "close" }, React.createElement("span", { onClick: this.handleCancel.bind(this) }, "×"), React.createElement("span", { className: "sr-only" }, "Close")), React.createElement("h4", { className: "modal-title" }, this.props.title)), React.createElement("div", { className: "modal-body", style: { marginTop: this.props.title === '' ? 20 : null } }, this.props.children), React.createElement("div", { className: "modal-footer" }, this.props.renderOperateButton() ? this.props.renderOperateButton(this.handleOk.bind(this), this.handleCancel.bind(this)) : React.createElement("div", null, React.createElement(index_1.default, { onClick: this.handleCancel.bind(this), type: "secondary" }, this.props.cancelText), React.createElement(index_1.default, { type: "primary", onClick: this.handleOk.bind(this) }, this.props.okText))))));
            ReactDOM.render(ModalElement, this.modalDom);
        }
    }, {
        key: "render",
        value: function render() {
            return null;
        }
    }]);

    return Modal;
}(React.Component);
Modal.defaultProps = new typings.Props();
Modal = __decorate([index_2.TransmitTransparently()], Modal);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Modal;