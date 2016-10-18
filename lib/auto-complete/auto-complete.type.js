"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = function Props() {
    _classCallCheck(this, Props);

    this.datas = [];
    this.autoFilter = false;
    this.maxNumber = 10;
    this.method = 'get';
    this.url = '';
    this.onSelect = function (value) {};
    this.beforeSend = function (value) {
        return value;
    };
    this.complete = function (res) {
        return res;
    };
    this.parse = {
        text: 'text',
        value: 'value'
    };
    this.delay = 0;
};

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);

    this.showComplete = false;
    this.datas = new Array();
    this.filterDatas = new Array();
    this.value = '';
    this.selectIndex = -1;
};

exports.State = State;