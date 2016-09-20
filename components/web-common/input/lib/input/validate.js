"use strict";

var validator = require('validator');
var extendValidator = {
    contains: validator.contains,
    equals: validator.equals,
    isAfter: validator.isAfter,
    isAlpha: validator.isAlpha,
    isAlphanumeric: validator.isAlphanumeric,
    isAscii: validator.isAscii,
    isBase64: validator.isBase64,
    isBefore: validator.isBefore,
    isBoolean: validator.isBoolean,
    isByteLength: validator.isByteLength,
    isCreditCard: validator.isCreditCard,
    isCurrency: validator.isCurrency,
    isDate: validator.isDate,
    isDecimal: validator.isDecimal,
    isDivisibleBy: validator.isDivisibleBy,
    isEmail: validator.isEmail,
    isFQDN: validator.isFQDN,
    isFloat: validator.isFloat,
    isFullWidth: validator.isFullWidth,
    isHalfWidth: validator.isHalfWidth,
    isHexColor: validator.isHexColor,
    isHexadecimal: validator.isHexadecimal,
    isIP: validator.isIP,
    isISBN: validator.isISBN,
    isISIN: validator.isISIN,
    isISO8601: validator.isISO8601,
    isIn: validator.isIn,
    isInt: validator.isInt,
    isJSON: validator.isJSON,
    isLength: validator.isLength,
    isLowercase: validator.isLowercase,
    isMACAddress: validator.isMACAddress,
    isMobilePhone: validator.isMobilePhone,
    isMongoId: validator.isMongoId,
    isMultibyte: validator.isMultibyte,
    isNull: validator.isNull,
    isNumeric: validator.isNumeric,
    isSurrogatePair: validator.isSurrogatePair,
    isURL: validator.isURL,
    isUUID: validator.isUUID,
    isUppercase: validator.isUppercase,
    isVariableWidth: validator.isVariableWidth,
    isWhitelisted: validator.isWhitelisted,
    matches: validator.matches,
    blacklist: validator.blacklist,
    escape: validator.escape,
    ltrim: validator.ltrim,
    normalizeEmail: validator.normalizeEmail,
    rtrim: validator.rtrim,
    stripLow: validator.stripLow,
    toBoolean: validator.toBoolean,
    toDate: validator.toDate,
    toFloat: validator.toFloat,
    toInt: validator.toInt,
    toString: validator.toString,
    trim: validator.trim,
    whitelist: validator.whitelist,
    extend: validator.extend,
    isDataURI: validator.isDataURI,
    isMD5: validator.isMD5,
    unescape: validator.unescape,
    notEmpty: function notEmpty(str) {
        return !str.match(/^[\s\t\r\n]*$/);
    },
    len: function len(str, min, max) {
        return extendValidator.isLength(str, min, max);
    },
    isUrl: function isUrl(str) {
        return validator.isURL(str);
    },
    isIPv6: function isIPv6(str) {
        return validator.isIP(str, 6);
    },
    isIPv4: function isIPv4(str) {
        return validator.isIP(str, 4);
    },
    notIn: function notIn(str, values) {
        return !validator.isIn(str, values);
    },
    regex: function regex(str, pattern, modifiers) {
        str += '';
        if (Object.prototype.toString.call(pattern).slice(8, -1) !== 'RegExp') {
            pattern = new RegExp(pattern, modifiers);
        }
        return !!str.match(pattern);
    },
    notRegex: function notRegex(str, pattern, modifiers) {
        return !extendValidator.regex(str, pattern, modifiers);
    },
    min: function min(str, val) {
        var number = parseFloat(str);
        return isNaN(number) || number >= val;
    },
    max: function max(str, val) {
        var number = parseFloat(str);
        return isNaN(number) || number <= val;
    },
    not: function not(str, pattern, modifiers) {
        return extendValidator.notRegex(str, pattern, modifiers);
    },
    notContains: function notContains(str, elem) {
        return !validator.contains(str, elem);
    },
    is: function is(str, pattern, modifiers) {
        return extendValidator.regex(str, pattern, modifiers);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = extendValidator;