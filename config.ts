// 本地 server 端口号
export const localPort = 18080

// 本地 dev 模式 webpack 文件服务端口号
export const localWebpackPort = 8090

// 私有代码仓库
export const privateGit = 'http://gitlab.baidu.com/tb-next-component'

// 公有代码仓库
export const publicGit = 'https://github.com/next-component'

// 组件库文件夹
export const componentsPath = 'components'

// 作者
export const author = 'ascoders'

// 组件编译产出目录名
export const componentBuildPath = 'lib'

// 静态资源路径前缀
export const publicPath = 'static'

// 定制依赖版本的 npm 包
export const customNpmPackage = [{
    name: 'react',
    type: 'peerDependences',
    version: '^0.14.0 || ^15.0.0'
}, {
    name: 'react-native',
    type: 'peerDependences',
    version: '^0.29.0'
}, {
    name: 'react-dom',
    type: 'peerDependences',
    version: '^0.14.0 || ^15.0.0'
}, {
    name: 'react-router',
    type: 'peerDependences',
    version: '^2.7.0'
}]