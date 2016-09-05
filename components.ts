///<reference path="./typings/components.d.ts" />

export default [{
    name: 'common',
    chinese: '通用',
    prefix: 'nt',
    isPrivate: false,
    components: [{
        name: 'button',
        chinese: '按钮',
        isWeb: true
    }, {
        name: 'tooltip',
        chinese: '工具提示',
        isWeb: true
    }]
}, {
    name: 'wefan',
    chinese: '微粉',
    prefix: 'nt-wefan',
    isPrivate: true,
    components: [{
        name: 'resource-card',
        chinese: '资源卡片',
        isWeb: true,
        isAndroid: true,
        isIos: true
    }, {
        name: 'navbar',
        chinese: '导航条',
        isWeb: true,
        isAndroid: true,
        isIos: true
    }]
}] as Array<Components.Category>