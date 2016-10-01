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
        name: 'input',
        chinese: '输入框',
        isWeb: true
    }, {
        name: 'number',
        chinese: '数字框',
        isWeb: true
    }, {
        name: 'switch',
        chinese: '开关',
        isWeb: true
    }, {
        name: 'radio',
        chinese: '单选框',
        isWeb: true
    }, {
        name: 'checkbox',
        chinese: '多选框',
        isWeb: true
    }, {
        name: 'select',
        chinese: '下拉选择框',
        isWeb: true
    }, {
        name: 'collapse',
        chinese: '手风琴',
        isWeb: true
    }, {
        name: 'tooltip',
        chinese: '工具提示',
        isWeb: true
    }, {
        name: 'message',
        chinese: '全局消息',
        isWeb: true
    }, {
        name: 'modal',
        chinese: '模态框',
        isWeb: true
    }, {
        name: 'tabs',
        chinese: '标签页',
        isWeb: true
    }, {
        name: 'tree',
        chinese: '树',
        isWeb: true
    }, {
        name: 'json-tree',
        chinese: 'json 树',
        isWeb: true
    }, {
        name: 'margin-padding-editor',
        chinese: '内/外边距编辑器',
        isWeb: true
    }, {
        name: 'badge',
        chinese: '徽标',
        isWeb: true
    }, {
        name: 'loading',
        chinese: '进度条',
        isWeb: true
    }, {
        name: 'timeago',
        chinese: '友好时间',
        isWeb: true
    }, {
        name: 'image-preload',
        chinese: '图片预加载',
        isWeb: true
    }]
}, {
    name: 'common',
    chinese: '通用',
    prefix: 'nt',
    isPrivate: false,
    components: [{
        name: 'image',
        chinese: '图片',
        isWeb: true,
        isIos: true
    }, {
        name: 'gif',
        chinese: 'GIF',
        isWeb: true,
        isIos: true
    }, {
        name: 'image-zoom',
        chinese: '图片手势操作',
        git: 'https://github.com/ascoders/react-native-image-zoom.git',
        npm: 'react-native-image-pan-zoom',
        isIos: true
    }, {
        name: 'image-viewer',
        chinese: '大图浏览',
        git: 'https://github.com/ascoders/react-native-image-viewer.git',
        npm: 'react-native-image-zoom-viewer',
        isIos: true,
        isAndroid: true
    }, {
        name: 'transmit-transparently',
        chinese: '透传',
        isWeb: true,
        isIos: true,
        isAndroid: true
    }, {
        name: 'auto-bind',
        chinese: '自动绑定',
        isWeb: true,
        isIos: true,
        isAndroid: true
    }, {
        name: 'transparently-props',
        chinese: '透传属性定义',
        isWeb: true,
        isIos: true,
        isAndroid: true
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
}, {
    name: 'editor',
    chinese: '编辑器',
    prefix: 'nt-editor',
    isPrivate: false,
    components: [{
        name: 'gaea-editor',
        chinese: '盖亚-编辑器',
        isWeb: true,
        git: 'https://github.com/ascoders/gaea-editor.git',
        npm: 'gaea-editor'
    }, {
        name: 'gaea-preview',
        chinese: '盖亚-查看器',
        isWeb: true,
        isAndroid: true,
        isIos: true,
        git: 'https://github.com/ascoders/gaea-preview.git',
        npm: 'gaea-preview'
    }, {
        name: 'gaea-web-components',
        chinese: '盖亚-网页组件',
        isWeb: true,
        git: 'https://github.com/ascoders/gaea-web-components.git',
        npm: 'gaea-web-components'
    }, {
        name: 'gaea-native-components',
        chinese: '盖亚-原生组件',
        isWeb: true,
        isAndroid: true,
        isIos: true,
        git: 'https://github.com/ascoders/gaea-native-components.git',
        npm: 'gaea-native-components'
    }, {
        name: 'gaea-model',
        chinese: '盖亚-定义',
        isWeb: true,
        isAndroid: true,
        isIos: true,
        git: 'https://github.com/ascoders/gaea-model.git',
        npm: 'gaea-model',
        ignoreBuild: true
    }, {
        name: 'gaea-helper',
        chinese: '盖亚-组件辅助',
        isWeb: true,
        isAndroid: true,
        isIos: true,
        git: 'https://github.com/ascoders/gaea-helper.git',
        npm: 'gaea-helper',
        ignoreBuild: true
    }]
}] as Array<Components.Category>