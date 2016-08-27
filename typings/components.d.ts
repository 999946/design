declare namespace Components {
    export interface Category {
        /**
         * 分类名称
         */
        name: string
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
    }

    export interface ComponentFullInfo {
        component: Components.ComponentConfig
        category: Components.Category
    }

    /**
     * 组件的依赖关系
     */
    export interface Dependence {
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
    }
}