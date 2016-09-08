"use strict";
const React = require('react');
class PropsGaea {
    constructor() {
        this.gaeaName = '工具提示';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'web-common-tooltip';
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.title = '';
        this.titleRender = () => {
            return (React.createElement("div", null, "tool tip!"));
        };
        this.zIndex = 100;
    }
}
exports.Props = Props;
class State {
    constructor() {
        this.childrenTop = 0;
        this.childrenLeft = 0;
        this.childrenWidth = 0;
        this.childrenHeight = 0;
        this.tooltipWidth = 0;
        this.tooltipHeight = 0;
        this.show = false;
    }
}
exports.State = State;
