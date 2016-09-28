"use strict";

var _ = require('lodash');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (value, scope, fullLength, ignoreParent) {
    var number = void 0;
    value = _.gt(parseFloat(value), parseFloat(scope.props.max)) ? scope.props.max : value;
    value = _.lt(parseFloat(value), parseFloat(scope.props.min)) ? scope.props.min : value;
    if (!scope.props.float) {
        number = _.parseInt(value).toString();
    } else {
        if (fullLength) {
            number = parseFloat(value).toFixed(scope.props.float);
        } else {
            number = parseFloat(value).toString();
        }
    }
    if (_.isNaN(number)) {
        number = '0';
    }
    if (value === '' || value === undefined) {
        number = '';
    }
    if (value === '-') {
        number = '-';
    }
    if (scope.props.float && value === '-0') {
        number = '-0';
    }
    if (scope.props.float && value && value !== '' && value.length > 1) {
        if (value[value.length - 1] === '.' || value[value.length - 1] === '。') {
            number = number + '.';
        }
    }
    if (scope.props.float && value === '-0.') {
        number = '-0.';
    }
    if (scope.props.float) {
        var arr = number.toString().split('.');
        if (arr.length > 1 && arr[1].length > parseInt(scope.props.float)) {
            number = parseFloat(number).toFixed(scope.props.float).toString();
        }
    }
    if (!ignoreParent && number !== '' && !_.isNaN(number)) {
        if (!scope.props.float) {} else {}
    }
    return number;
};