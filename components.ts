///<reference path="./typings/components.d.ts" />

export default [{
    name: 'web-common',
    chinese: 'web通用',
    prefix: 'nt-web',
    isPrivate: false,
    components: [{
        name: 'button',
        chinese: '按钮',
        isWeb: true
    }, {
        name: 'tree',
        chinese: '折叠树',
        isWeb: true
    }, {
        name: 'tooltip',
        chinese: '工具提示',
        isWeb: true
    }]
}, {
    name: 'common',
    chinese: '通用',
    prefix: 'nt',
    isPrivate: false,
    components: [{
        name:'transmit-transparently',
        chinese: '透传',
        isWeb: true,
        isIos: true,
        isAndroid: true
    }, {
        name: 'image',
        chinese: '图片',
        isWeb: true,
        isIos: true
    }, {
        name: 'gif',
        chinese: 'GIF',
        isWeb: true,
        isIos: true
    }]
}, {
    name: 'wefan',
    chinese: '微粉',
    prefix: 'nt-wefan',
    isPrivate: true,
    components: [{
        name: 'image',
        chinese: '图片',
        isWeb: true,
        isIos: true
    }, {
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