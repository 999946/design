"use strict";
const React = require('react');
const react_native_1 = require('react-native');
class PropsGaea {
    constructor() {
        this.gaeaName = '导航条';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'wefan-navbar';
        this.gaeaEdit = [{
                field: 'title',
                label: '文字',
                editor: 'text',
                editable: true
            }];
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.hasUnderLine = true;
        this.title = '标题';
        this.left = () => {
            return (React.createElement(react_native_1.Image, {style: { height: 65 }, source: require('../images/back.png')}));
        };
    }
}
exports.Props = Props;
class State {
}
exports.State = State;
