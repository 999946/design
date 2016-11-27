// 本地 server 端口号
export const localPort = 8080

// 本地 dev 模式 webpack 文件服务端口号
export const localWebpackPort = 9091

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
    version: '*'
}, {
    name: 'react-dom',
    type: 'peerDependences',
    version: '^0.14.0 || ^15.0.0'
}, {
    name: 'react-router',
    type: 'peerDependences',
    version: '^2.7.0'
}]

// 反向代理接口 main
export const apiHost = 'http://ss2.tieba.otp.baidu.com'

// 后端接口 url 前缀
export const apiPrefix = '/designer'

// 路由统一前缀
export const routerBasenameProduction = '/'
export const routerBasename = process.env['NODE_ENV'] === 'production' ? routerBasenameProduction : ''

// 发布静态资源路径前缀
// [注意] 为空时要写成 '/', 保证绝对路径, 否则引用路径会变为相对路径
export const staticPathPrefixProduction = process.env['PRODUCTION'] ? 'http://tb1.bdstatic.com/static/next-design' : '/'

// 属于 node 模块，不检查依赖，也不会放在依赖里
export const nodeModules = ['path','fs']