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
var React = require('react');
var ReactDOM = require('react-dom');
var typings = require('./page.type');
var mobx_1 = require('mobx');
var mobx_react_1 = require('mobx-react');
var classNames = require('classnames');
var _ = require('lodash');
var index_1 = require('nt-auto-bind');
var index_2 = require('gaea-preview');
var left_bar_component_1 = require('./left-bar/left-bar.component');
var sidebar_tools_component_1 = require('./sidebar-tools/sidebar-tools.component');
var sidebar_tools_preview_component_1 = require('./sidebar-tools-preview/sidebar-tools-preview.component');
var footer_component_1 = require('./footer/footer.component');
var viewport_component_1 = require('./viewport/viewport.component');
var viewport_sidebar_resize_component_1 = require('./viewport-sidebar-resize/viewport-sidebar-resize.component');
var header_component_1 = require('./header/header.component');
var sidebar_addon_component_1 = require('./sidebar-addon/sidebar-addon.component');
var outer_move_box_component_1 = require('./outer-move-box/outer-move-box.component');
var left_absolute_bar_component_1 = require('./left-absolute-bar/left-absolute-bar.component');
require('./page.css');
var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        var _ref;

        _classCallCheck(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Page, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            if (_.isEmpty(this.props.application.defaultValue)) {
                this.props.viewport.createRootUniqueId();
                var LayoutClass = this.props.application.getComponentByUniqueKey('gaea-layout');
                var layoutProps = mobx_1.extendObservable({}, _.cloneDeep(LayoutClass.defaultProps));
                if (this.props.application.isReactNative) {
                    layoutProps['flex'] = 1;
                    layoutProps['overflowY'] = 'auto';
                    layoutProps['flexDirection'] = 'column';
                } else {
                    layoutProps['flexGrow'] = 1;
                    layoutProps['flexDirection'] = 'column';
                    layoutProps['display'] = 'block';
                    layoutProps['overflow'] = null;
                    layoutProps['overflowX'] = 'hidden';
                    layoutProps['overflowY'] = 'auto';
                }
                this.props.viewport.setComponents(this.props.viewport.rootMapUniqueKey, {
                    props: layoutProps,
                    layoutChilds: [],
                    parentMapUniqueKey: null
                });
            } else {
                Object.keys(this.props.application.defaultValue).forEach(function (mapUniqueKey) {
                    var defaultInfo = _this2.props.application.defaultValue[mapUniqueKey];
                    var ComponentClass = _this2.props.application.getComponentByUniqueKey(defaultInfo.props.gaeaUniqueKey);
                    if (defaultInfo.parentMapUniqueKey === null) {
                        _this2.props.viewport.setRootUniqueId(mapUniqueKey);
                    }
                    var props = _.cloneDeep(ComponentClass.defaultProps);
                    defaultInfo.props && Object.keys(defaultInfo.props).forEach(function (propsKey) {
                        props[propsKey] = defaultInfo.props[propsKey];
                    });
                    _this2.props.viewport.setComponents(mapUniqueKey, {
                        props: props,
                        layoutChilds: defaultInfo.layoutChilds || [],
                        parentMapUniqueKey: defaultInfo.parentMapUniqueKey
                    });
                });
            }
        }
    }, {
        key: "getSectionContainerRef",
        value: function getSectionContainerRef(ref) {
            this.props.viewport.setSectionContainerDomInstance(ReactDOM.findDOMNode(ref));
        }
    }, {
        key: "render",
        value: function render() {
            var sectionClasses = classNames({
                'section': true,
                'section-transition': !this.props.application.isSidebarMoving,
                'preview': this.props.application.isPreview
            });
            var viewportMainContainerStyle = {
                marginLeft: this.props.viewport.leftBarType !== '' ? 0 : -this.props.application.leftSidebarWidth + 37,
                marginRight: this.props.viewport.isShowSidebarAddon ? 0 : -this.props.application.sidebarWidth
            };
            var leftBarStyle = {
                width: this.props.application.leftSidebarWidth
            };
            var rightBarStyle = {
                width: this.props.application.sidebarWidth
            };
            return React.createElement("div", { className: "nt-editor-gaea-editor-gaea_editor-page", style: { height: this.props.application.height } }, React.createElement("div", { style: { width: this.props.application.sidebarWidth }, className: "sidebar" }, React.createElement(sidebar_tools_component_1.default, null), React.createElement(sidebar_tools_preview_component_1.default, null), React.createElement(viewport_sidebar_resize_component_1.default, null)), React.createElement("div", { className: sectionClasses }, React.createElement(header_component_1.default, null), React.createElement("div", { className: "section-container", ref: this.getSectionContainerRef, style: { height: "calc(100% - " + (this.props.application.headerHeight + this.props.application.footerHeight) + "px)" } }, React.createElement(left_absolute_bar_component_1.default, null), React.createElement("div", { className: "viewport-main-container", style: viewportMainContainerStyle }, React.createElement("div", { className: "left-bar", style: leftBarStyle }, React.createElement(left_bar_component_1.default, null)), React.createElement("div", { className: "viewport-main-content-outer" }, React.createElement("div", { className: "viewport-main-content", style: { width: this.props.application.viewportWidth + "%" } }, React.createElement(viewport_component_1.default, null), React.createElement(outer_move_box_component_1.default, null), this.props.application.isPreview && React.createElement("div", { className: "preview-container" }, React.createElement(index_2.default, { value: this.props.viewport.getIncrementComponentsInfo(), baseComponents: this.props.application.baseComponents, customComponents: this.props.application.customComponents })))), React.createElement("div", { className: "right-bar", style: rightBarStyle }, React.createElement(sidebar_addon_component_1.default, null)))), React.createElement(footer_component_1.default, null)));
        }
    }]);

    return Page;
}(React.Component);
Page.defaultProps = new typings.Props();
__decorate([index_1.autoBindMethod], Page.prototype, "getSectionContainerRef", null);
Page = __decorate([mobx_react_1.inject('viewport', 'application'), mobx_react_1.observer], Page);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;