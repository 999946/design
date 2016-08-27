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
}