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

declare module 'rc-animate'{
    var exports:()=>any
    export = exports
}

declare module 'css-animation'{
    export const isCssAnimationSupported:boolean
}