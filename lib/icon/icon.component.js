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
var typings = require("./icon.type");
var react_native_1 = require("react-native");
var icons = {
    icnHomepageZfS: require('./images/icn_homepage_zf_s.png'),
    iconBackNavMineBlack: require('./images/icon_back_nav_mine_black.png'),
    iconMoreNavN: require('./images/icon_more_nav_n.png'),
    iconCloseNav: require('./images/icon_close_nav.png'),
    icnHomeTopNewb: require('./images/icn_home_top_newb.png'),
    icnMineSettingB: require('./images/icn_mine_setting_b.png'),
    iconFindSearch: require('./images/icon_find_search.png'),
    minus: require('./images/minus.png')
};
var getIconByName = function getIconByName(name) {
    return icons[name];
};

var GaeaComponents = function (_React$Component) {
    (0, _inherits3.default)(GaeaComponents, _React$Component);

    function GaeaComponents() {
        (0, _classCallCheck3.default)(this, GaeaComponents);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GaeaComponents.__proto__ || Object.getPrototypeOf(GaeaComponents)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(GaeaComponents, [{
        key: "render",
        value: function render() {
            return React.createElement(react_native_1.Image, { style: this.props.style, source: getIconByName(this.props.name) });
        }
    }]);
    return GaeaComponents;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GaeaComponents;
GaeaComponents.defaultProps = new typings.Props();