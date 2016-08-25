export interface Category {
    [categoryName: string]: CategoryConfig
}

export interface CategoryConfig {
    /**
     * 发布时候的前缀
     */
    prefix: string
    /**
     * 隐私等级
     * private: 提交、发布到私有仓库
     * protected: 提交到私有仓库, 发布到公有仓库
     * public: 提交、发布到公有仓库
     */
    access: 'private'|'protected'|'public'
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

export default {
    /**
     * 微粉
     */
    wefan: {
        prefix: 'nt-wefan',
        access: 'private',
        components: [{
            name: 'resource-card',
            chinese: '资源卡片'
        }]
    }
} as Category