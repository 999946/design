"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropsGaea = (function () {
    function PropsGaea() {
        this.gaeaName = '透传属性定义';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'nt-transparently-props';
    }
    return PropsGaea;
}());
exports.PropsGaea = PropsGaea;
var Props = (function (_super) {
    __extends(Props, _super);
    function Props() {
        return _super.apply(this, arguments) || this;
    }
    return Props;
}(PropsGaea));
exports.Props = Props;
var State = (function () {
    function State() {
    }
    return State;
}());
exports.State = State;
