///<reference path="./typings/components.d.ts" />

export default [{
    name: 'common',
    chinese: '通用',
    prefix: 'nt',
    isPrivate: false,
    components: []
}, {
    name: 'wefan',
    chinese: '微粉',
    prefix: 'nt-wefan',
    isPrivate: true,
    components: [{
        name: 'resource-card',
        chinese: '资源卡片'
    }, {
        name: 'navbar',
        chinese: '导航条'
    }]
}] as Array<Components.Category>