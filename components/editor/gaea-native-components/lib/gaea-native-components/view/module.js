"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropsGaea = function PropsGaea() {
    _classCallCheck(this, PropsGaea);

    this.gaeaName = '布局';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'gaea-layout';
    this.gaeaEdit = [{
        field: 'flex',
        label: 'flex',
        type: 'number',
        editor: 'text',
        editable: true,
        notNullValue: 1,
        canNull: true
    }, {
        field: 'height',
        label: '高度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 50,
        canNull: true
    }, {
        field: 'minHeight',
        label: '最小高度',
        editor: 'text',
        type: 'number',
        editable: true,
        canNull: true
    }, {
        field: 'width',
        label: '宽度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 50,
        canNull: true
    }, {
        field: 'minWidth',
        label: '最小宽度',
        editor: 'text',
        type: 'number',
        editable: true,
        canNull: true
    }, {
        field: 'justifyContent',
        label: '主轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'space-between',
            value: 'space-between'
        }, {
            key: 'space-around',
            value: 'space-around'
        }]
    }, {
        field: 'alignItems',
        label: '交叉轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'baseline',
            value: 'baseline'
        }, {
            key: 'stretch',
            value: 'stretch'
        }]
    }, {
        field: 'flexDirection',
        label: '布局方向',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'row',
            value: 'row'
        }, {
            key: 'row-reverse',
            value: 'row-reverse'
        }, {
            key: 'column',
            value: 'column'
        }, {
            key: 'column-reverse',
            value: 'column-reverse'
        }]
    }, {
        field: 'flexWrap',
        label: '排列方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'nowrap',
            value: 'nowrap'
        }, {
            key: 'wrap',
            value: 'wrap'
        }, {
            key: 'wrap-reverse',
            value: 'wrap-reverse'
        }]
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

        _this.flex = null;
        _this.height = null;
        _this.minHeight = 0;
        _this.width = null;
        _this.minWidth = 0;
        _this.justifyContent = 'flex-start';
        _this.alignItems = 'stretch';
        _this.flexDirection = 'row';
        _this.flexWrap = 'nowrap';
        _this.backgroundColor = 'white';
        _this.overflowX = 'hidden';
        _this.overflowY = 'hidden';
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