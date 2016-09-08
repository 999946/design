"use strict";
class PropsGaea {
    constructor() {
        this.gaeaName = '图片';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'nt-wefan-image';
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.source = '';
    }
}
exports.Props = Props;
class State {
}
exports.State = State;
