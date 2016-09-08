"use strict";
class PropsGaea {
    constructor() {
        this.gaeaName = 'GIF';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'nt-gif';
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.source = '';
        this.onPress = () => {
        };
    }
}
exports.Props = Props;
class State {
    constructor() {
        this.source = '';
    }
}
exports.State = State;
