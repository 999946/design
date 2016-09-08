"use strict";
exports.Type = {
    Default: 'default',
    Primary: 'primary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
    Dark: 'dark'
};
class PropsGaea {
    constructor() {
        this.gaeaName = '按钮';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'web-common-button';
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.type = exports.Type.Default;
        this.disabled = false;
        this.active = false;
        this.loading = false;
        this.rounded = false;
        this.addonLeft = null;
        this.addonRight = null;
        this.onClick = () => {
        };
    }
}
exports.Props = Props;
class State {
}
exports.State = State;
