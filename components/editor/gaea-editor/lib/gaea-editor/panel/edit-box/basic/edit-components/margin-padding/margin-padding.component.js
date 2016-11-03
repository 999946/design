"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./margin-padding.type");
var mobx_react_1 = require("mobx-react");
var index_1 = require('nt-web-margin-padding-editor');
require("./margin-padding.css");
var EditComponentText = function (_React$Component) {
    (0, _inherits3.default)(EditComponentText, _React$Component);

    function EditComponentText() {
        (0, _classCallCheck3.default)(this, EditComponentText);

        var _this = (0, _possibleConstructorReturn3.default)(this, (EditComponentText.__proto__ || Object.getPrototypeOf(EditComponentText)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(EditComponentText, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.componentInfo = this.props.viewport.components.get(this.props.viewport.currentEditComponentMapUniqueKey);
        }
    }, {
        key: "handleStart",
        value: function handleStart() {
            this.props.viewport.prepareWriteHistory();
        }
    }, {
        key: "handleChange",
        value: function handleChange(name, value) {
            this.props.viewport.updateComponentValueWithNoHistory("style." + name, value);
        }
    }, {
        key: "handleFinalChange",
        value: function handleFinalChange(name, value) {
            this.props.viewport.updateComponentValueWithNoHistory("style." + name, value);
            this.props.viewport.writeHistory();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "nt-editor-gaea-editor-gaea_editor-panel-edit_box-basic-edit_components-margin_padding" }, React.createElement(index_1.default, { size: 220, onStart: this.handleStart.bind(this), marginLeft: this.componentInfo.props.style.marginLeft, marginTop: this.componentInfo.props.style.marginTop, marginRight: this.componentInfo.props.style.marginRight, marginBottom: this.componentInfo.props.style.marginBottom, paddingLeft: this.componentInfo.props.style.paddingLeft, paddingTop: this.componentInfo.props.style.paddingTop, paddingRight: this.componentInfo.props.style.paddingRight, paddingBottom: this.componentInfo.props.style.paddingBottom, onChange: this.handleChange.bind(this), onFinalChange: this.handleFinalChange.bind(this) }));
        }
    }]);
    return EditComponentText;
}(React.Component);
EditComponentText.defaultProps = new typings.Props();
EditComponentText = __decorate([mobx_react_1.inject('viewport'), mobx_react_1.observer], EditComponentText);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditComponentText;