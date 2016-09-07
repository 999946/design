"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var typings = require('./image.type');
var react_native_1 = require('react-native');

var ImageComponent = function (_React$Component) {
    _inherits(ImageComponent, _React$Component);

    function ImageComponent() {
        var _ref;

        _classCallCheck(this, ImageComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        _this.fallbackLoadCounter = 0;
        _this.loadImageSuccess = false;
        return _this;
    }

    _createClass(ImageComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                source: this.props.source
            });
        }
    }, {
        key: 'handleLoadSuccess',
        value: function handleLoadSuccess() {
            this.fallbackLoadCounter = 0;
            if (this.state.source === this.props.source) {
                this.loadImageSuccess = true;
            }
        }
    }, {
        key: 'handleLoadError',
        value: function handleLoadError() {
            this.loadImageSuccess = false;
            if (this.props.fallbackSource) {
                if (this.fallbackLoadCounter < 3) {
                    this.fallbackLoadCounter++;
                    this.setState({
                        source: this.props.fallbackSource
                    });
                }
            }
        }
    }, {
        key: 'handlePress',
        value: function handlePress() {
            this.props.onPress && this.props.onPress();
            if (this.props.pressToReload && this.loadImageSuccess === false) {
                this.fallbackLoadCounter = 0;
                this.setState({
                    source: this.props.source
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, onPress: this.handlePress.bind(this) }, React.createElement(react_native_1.Image, { style: this.props.style, onError: this.handleLoadError.bind(this), onLoad: this.handleLoadSuccess.bind(this), source: this.state.source }));
        }
    }]);

    return ImageComponent;
}(React.Component);

ImageComponent.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageComponent;