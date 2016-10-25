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

declare module 'postcss' {
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
