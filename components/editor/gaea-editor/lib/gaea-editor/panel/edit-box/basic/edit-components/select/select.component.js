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
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./select.type");
var mobx_react_1 = require("mobx-react");
var index_1 = require('nt-web-select');
var EditComponentSelect = function (_React$Component) {
    (0, _inherits3.default)(EditComponentSelect, _React$Component);

    function EditComponentSelect() {
        (0, _classCallCheck3.default)(this, EditComponentSelect);

        var _this = (0, _possibleConstructorReturn3.default)(this, (EditComponentSelect.__proto__ || Object.getPrototypeOf(EditComponentSelect)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(EditComponentSelect, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            this.componentInfo = this.props.viewport.components.get(this.props.viewport.currentEditComponentMapUniqueKey);
            var selectorOpts = {
                label: '',
                disabled: this.props.editOption.editable === false,
                defaultValue: this.props.viewport.getPropsByFieldWithEditor(this.componentInfo.props, this.props.editOption),
                options: this.props.editOption.selector,
                onChange: function onChange(value) {
                    _this2.props.viewport.updateComponentOptionsValue(_this2.props.editOption, value);
                }
            };
            return React.createElement(index_1.Select, __assign({}, selectorOpts));
        }
    }]);
    return EditComponentSelect;
}(React.Component);
EditComponentSelect.defaultProps = new typings.Props();
EditComponentSelect = __decorate([mobx_react_1.inject('viewport'), mobx_react_1.observer], EditComponentSelect);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditComponentSelect;