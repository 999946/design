declare namespace Components {
    export interface Category {
        /**
         * 分类名称
         */
        name: string
        /**
         * 分类中文名
         */
        chinese: string
        /**
         * 发布时候的前缀
         */
        prefix: string
        /**
         * 是否隐私
         * private: 提交、发布到私有仓库
         * public: 提交、发布到公有仓库
         */
        isPrivate: boolean
        /**
         * 组件列表
         */
        components?: Array<ComponentConfig>
    }

    export interface ComponentConfig {
        /**
         * 组件名（不带前缀）
         */
        name: string
        /**
         * 中文名
         */
        chinese: string
        /**
         * 是否可用于 android
         */
        isAndroid?: boolean
        /**
         * 是否可用于 ios
         */
        isIos?: boolean
        /**
         * 是否可用于 web
         */
        isWeb?: boolean
        /**
         * git 仓库地址，优先于默认设定
         */
        git?: string
        /**
         * npm 发布的模块名，优先于默认设定
         */
        npm?: string
    }

    export interface ComponentFullInfo {
        component: Components.ComponentConfig
        category: Components.Category
    }

    /**
     * 组件的依赖关系
     */
    export interface FullInfoWithDependence extends ComponentFullInfo {
        // 当前组件的 packageJson
        packageJson: PackageJson
        dependence: Array<{
            type: 'npm'|'component'
            name: string
            // type = component 时才有, 表示属于哪个分类
            category?: string
        }>
    }

    export interface PackageJson {
        name: string
        version: string
        description?: string
        main: string
        typings: string
        scripts?: {
            [name: string]: string
        }
        repository: {
            type: 'git' | 'svn'
            url: string
        }
        keywords?: Array<string>
        author: string
        license: string
        devDependencies?: {
            [module: string]: string
        }
        dependencies?: {
            [module: string]: string
        }
        peerDependencies?: {
            [module: string]: string
        }
    }

    /**
     * 发布级别字符串
     */
    export type PublishLevel = 'major' | 'minor' | 'patch' | 'empty'

    /**
     * 将要发布的组件的详细信息
     */
    export interface PublishInfo {
        componentInfoWithDep: Components.FullInfoWithDependence
        // 用户期望发布级别
        userPublishLevel: Components.PublishLevel
        // 实际发布级别
        publishLevel: Components.PublishLevel
        // 发布前的版本号
        preVersion: string
        // 是否是用户操作要发布的
        isUserOperate: boolean
    }

    /**
     * demo 类
     */
    export interface DemoProps<P> extends __React.ComponentClass<P> {
        /**
         * 标题
         */
        title: string
        /**
         * 文档
         */
        description: string
    }
}