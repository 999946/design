"use strict";
class PropsGaea {
    constructor() {
        this.gaeaName = '图片';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'nt-image';
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.source = '';
        this.pressToReload = false;
        this.onPress = () => {
        };
        this.fallbackAddon = () => {
            return null;
        };
        this.onError = () => {
        };
        this.fallbackHideImage = false;
    }
}
exports.Props = Props;
class State {
    constructor() {
        this.source = '';
        this.loadImageSuccess = true;
    }
}
exports.State = State;
