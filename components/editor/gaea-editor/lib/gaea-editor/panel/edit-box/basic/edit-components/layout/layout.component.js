"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./layout.type");
var mobx_react_1 = require("mobx-react");
var index_1 = require('nt-web-button');
var index_2 = require('nt-web-tooltip');
var index_3 = require('nt-web-checkbox');
var index_4 = require('nt-web-number');
require("./layout.css");
var EditComponentText = function (_React$Component) {
    _inherits(EditComponentText, _React$Component);

    function EditComponentText() {
        _classCallCheck(this, EditComponentText);

        var _this = _possibleConstructorReturn(this, (EditComponentText.__proto__ || Object.getPrototypeOf(EditComponentText)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(EditComponentText, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.componentInfo = this.props.viewport.components.get(this.props.viewport.currentEditComponentMapUniqueKey);
        }
    }, {
        key: "handleUpdateValue",
        value: function handleUpdateValue(field, value) {
            this.props.viewport.updateComponentValue(field, value);
        }
    }, {
        key: "handleChangeReverse",
        value: function handleChangeReverse(checked) {
            switch (this.componentInfo.props.style.flexDirection) {
                case 'row':
                    this.handleUpdateValue('style.flexDirection', 'row-reverse');
                    break;
                case 'row-reverse':
                    this.handleUpdateValue('style.flexDirection', 'row');
                    break;
                case 'column':
                    this.handleUpdateValue('style.flexDirection', 'column-reverse');
                    break;
                case 'column-reverse':
                    this.handleUpdateValue('style.flexDirection', 'column');
                    break;
            }
        }
    }, {
        key: "handleFlexGrowChange",
        value: function handleFlexGrowChange(value) {
            if (this.props.application.isReactNative) {
                this.handleUpdateValue('style.flex', parseInt(value) || null);
            } else {
                this.handleUpdateValue('style.flexGrow', parseInt(value) || null);
            }
        }
    }, {
        key: "renderFlex",
        value: function renderFlex() {
            var isReverse = false;
            switch (this.componentInfo.props.style.flexDirection) {
                case 'row':
                    isReverse = false;
                    break;
                case 'row-reverse':
                    isReverse = true;
                    break;
                case 'column':
                    isReverse = false;
                    break;
                case 'column-reverse':
                    isReverse = true;
                    break;
            }
            var flexGrowString = '';
            if (this.props.application.isReactNative) {
                flexGrowString = this.componentInfo.props.style.flex ? this.componentInfo.props.style.flex.toString() : '';
            } else {
                flexGrowString = this.componentInfo.props.style.flexGrow ? this.componentInfo.props.style.flexGrow.toString() : '';
            }
            return React.createElement("div", null, React.createElement("div", { className: "layout-top-container", style: { marginTop: 5 } }, React.createElement(index_2.Tooltip, { title: "Direction:Row" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.flexDirection === 'row' || this.componentInfo.props.style.flexDirection === 'row-reverse', onClick: this.handleUpdateValue.bind(this, 'style.flexDirection', 'row') }, "R")), React.createElement(index_1.ButtonGroup, null, React.createElement(index_2.Tooltip, { title: "Justify:Start" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.justifyContent === 'flex-start', onClick: this.handleUpdateValue.bind(this, 'style.justifyContent', 'flex-start') }, "S")), React.createElement(index_2.Tooltip, { title: "Justify:Center" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.justifyContent === 'center', onClick: this.handleUpdateValue.bind(this, 'style.justifyContent', 'center') }, "C")), React.createElement(index_2.Tooltip, { title: "Justify:End" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.justifyContent === 'flex-end', onClick: this.handleUpdateValue.bind(this, 'style.justifyContent', 'flex-end') }, "E")), React.createElement(index_2.Tooltip, { title: "Justify:Between" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.justifyContent === 'space-between', onClick: this.handleUpdateValue.bind(this, 'style.justifyContent', 'space-between') }, "B")), React.createElement(index_2.Tooltip, { title: "Justify:Around" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.justifyContent === 'space-around', onClick: this.handleUpdateValue.bind(this, 'style.justifyContent', 'space-around') }, "A")))), React.createElement("div", { className: "layout-top-container", style: { marginTop: 5 } }, React.createElement(index_2.Tooltip, { title: "Direction:Column" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.flexDirection === 'column' || this.componentInfo.props.style.flexDirection === 'column-reverse', onClick: this.handleUpdateValue.bind(this, 'style.flexDirection', 'column') }, "C")), React.createElement(index_1.ButtonGroup, null, React.createElement(index_2.Tooltip, { title: "Align:Start" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.alignItems === 'flex-start', onClick: this.handleUpdateValue.bind(this, 'style.alignItems', 'flex-start') }, "S")), React.createElement(index_2.Tooltip, { title: "Align:Center" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.alignItems === 'center', onClick: this.handleUpdateValue.bind(this, 'style.alignItems', 'center') }, "C")), React.createElement(index_2.Tooltip, { title: "Align:End" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.alignItems === 'flex-end', onClick: this.handleUpdateValue.bind(this, 'style.alignItems', 'flex-end') }, "E")), React.createElement(index_2.Tooltip, { title: "Align:Stretch" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.alignItems === 'stretch', onClick: this.handleUpdateValue.bind(this, 'style.alignItems', 'stretch') }, "B")), React.createElement(index_2.Tooltip, { title: "Align:Baseline" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.alignItems === 'baseline', onClick: this.handleUpdateValue.bind(this, 'style.alignItems', 'baseline') }, "A")))), React.createElement("div", { className: "second-container" }, React.createElement(index_3.Checkbox, { checked: isReverse, onChange: this.handleChangeReverse.bind(this), style: { marginTop: 5, flexGrow: 1, width: 0 } }, "逆序"), React.createElement("div", { className: "second-container-flex-grow-container" }, React.createElement("span", null, "Grow"), React.createElement(index_4.Number, { label: "", onChange: this.handleFlexGrowChange.bind(this), value: flexGrowString }))));
        }
    }, {
        key: "renderDisplay",
        value: function renderDisplay() {
            return React.createElement("div", { className: "layout-top-container" }, React.createElement(index_1.ButtonGroup, null, React.createElement(index_2.Tooltip, { title: "Block" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.display === 'block', onClick: this.handleUpdateValue.bind(this, 'style.display', 'block') }, "1")), React.createElement(index_2.Tooltip, { title: "InlineBlock" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.display === 'inline-block', onClick: this.handleUpdateValue.bind(this, 'style.display', 'inline-block') }, "2")), React.createElement(index_2.Tooltip, { title: "Inline" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.display === 'inline', onClick: this.handleUpdateValue.bind(this, 'style.display', 'inline') }, "3"))), React.createElement(index_2.Tooltip, { title: "Flex" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.display === 'flex', onClick: this.handleUpdateValue.bind(this, 'style.display', 'flex') }, "flex")), React.createElement(index_2.Tooltip, { title: "None" }, React.createElement(index_1.Button, { active: this.componentInfo.props.style.display === 'none', onClick: this.handleUpdateValue.bind(this, 'style.display', 'none') }, React.createElement("i", { className: "fa fa-eye-slash" }))));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "nt-editor-gaea-editor-gaea_editor-panel-edit_box-basic-edit_components-layout" }, !this.props.application.isReactNative && this.renderDisplay(), (this.componentInfo.props.style.display === 'flex' || this.props.application.isReactNative) && this.renderFlex());
        }
    }]);

    return EditComponentText;
}(React.Component);
EditComponentText.defaultProps = new typings.Props();
EditComponentText = __decorate([mobx_react_1.inject('viewport', 'application'), mobx_react_1.observer], EditComponentText);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditComponentText;