"use strict";
class PropsGaea {
    constructor() {
        this.gaeaName = '资源卡片';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'wefan-resource-card';
        this.gaeaEdit = [{
                field: 'title',
                label: '资源描述',
                editor: 'text',
                editable: true
            }];
    }
}
exports.PropsGaea = PropsGaea;
class Props extends PropsGaea {
    constructor(...args) {
        super(...args);
        this.title = '资源';
        this.pictureSource = require('../images/resource.png');
    }
}
exports.Props = Props;
class State {
}
exports.State = State;
