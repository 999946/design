"use strict";
class PropsGaea {
    constructor() {
        this.gaeaName = '按钮组';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'web-common-button-group';
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.vertical = false;
    }
}
exports.Props = Props;
class State {
}
exports.State = State;
