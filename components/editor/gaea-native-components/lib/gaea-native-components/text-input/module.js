"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropsGaea = function PropsGaea() {
    _classCallCheck(this, PropsGaea);

    this.gaeaName = '输入框';
    this.gaeaIcon = 'pencil-square-o';
    this.gaeaUniqueKey = 'gaea-input';
    this.gaeaEdit = [{
        field: 'fontSize',
        label: '字体大小',
        editor: 'text',
        editable: true
    }, {
        field: 'placeholder',
        label: '占位符',
        editor: 'text',
        editable: true,
        canNull: true
    }, {
        field: 'flex',
        label: 'flex',
        type: 'number',
        editor: 'text',
        editable: true,
        canNull: true
    }, {
        field: 'width',
        label: '宽',
        editor: 'text',
        editable: true,
        canNull: true
    }, {
        field: 'height',
        label: '高',
        editor: 'text',
        editable: true,
        canNull: true
    }];
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    _inherits(Props, _PropsGaea);

    function Props() {
        var _ref;

        _classCallCheck(this, Props);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Props.__proto__ || Object.getPrototypeOf(Props)).call.apply(_ref, [this].concat(args)));

        _this.fontSize = 14;
        _this.placeholder = '请输入内容';
        _this.width = 200;
        _this.height = 25;
        _this.flex = null;
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);
};

exports.State = State;
//# sourceMappingURL=module.js.map