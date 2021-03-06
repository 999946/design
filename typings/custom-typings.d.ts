declare module 'webpack-dev-server' {
    const api: any
    export = api
}

declare module 'koa-static-cache' {
    const api: any
    export = api
}

declare module 'autoprefixer' {
    const api: any
    export = api
}


declare module 'format-json' {
    const api: {
        plain: Function
    }
    export = api
}

declare module 'react-copy-to-clipboard' {
    const api: any
    export = api
}

declare module 'fit-scroll-listen' {
    const api: {
        ScrollListenBox: any
        ScrollListenNail: any
        ScrollListen: any
        createStore: any
    }
    export = api
}

declare module 'rc-animate' {
    var exports: ()=>any
    export = exports
}

declare module 'css-animation' {
    export const isCssAnimationSupported: boolean
}

declare module 'react-codemirror' {
    var exports: ()=>any
    export = exports
}

declare module 'codemirror' {
    const exports: any
    export = exports
}

declare module 'sortablejs' {
    const api: any
    export = api
}

declare module 'react-color' {
    const api: {
        SketchPicker: any
        ChromePicker: any
    }
    export = api
}

declare module 'lz-string' {
    const api: any
    export = api
}

declare module 'qrcode.react' {
    const api: any
    export = api
}

declare module 'react-slick' {
    const api: any
    export = api
}

declare module 'react-html5video' {
    const Controls: any
    const Play: any
    const Mute: any
    const Seek: any
    const Fullscreen: any
    const Time: any
    const Overlay: any

    const defaultExport: any
    export default defaultExport
    export {Controls, Play, Mute, Seek, Fullscreen, Time, Overlay}
}

declare module 'antd' {
    const api: any
    export = api
}