"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var typings = require('./icon.type');
var react_native_1 = require('react-native');
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
    _inherits(GaeaComponents, _React$Component);

    function GaeaComponents() {
        var _ref;

        _classCallCheck(this, GaeaComponents);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = GaeaComponents.__proto__ || Object.getPrototypeOf(GaeaComponents)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(GaeaComponents, [{
        key: 'render',
        value: function render() {
            return React.createElement(react_native_1.Image, { style: this.props.style, source: getIconByName(this.props.name) });
        }
    }]);

    return GaeaComponents;
}(React.Component);

GaeaComponents.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GaeaComponents;