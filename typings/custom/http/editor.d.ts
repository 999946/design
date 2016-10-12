declare namespace Http {
    /**
     * 编辑器返回结构
     */
    export interface EditorResponse {
        id: string // 应用唯一 key
        name:string // 应用名称
        content: string // 编辑区域内容
        setting: string // 编辑配置
        version: string // 当前发布的版本号
        masterVersion: string // 最大版本号
    }

    /**
     * 保存请求
     */
    export interface EditorSaveRequest {
        id: string
        content: string
        setting: string
    }

    /**
     * 发布请求
     */
    export interface EditorPublishRequest {
        id: string
        version: string // 版本号
    }

    /**
     * 切换到某个版本号请求参数
     */
    export interface EditorChangePublishVersionRequest {
        id: string
        version: string
    }

    /**
     * 切换到某个版本号返回值
     */
    export interface EditorChangePublishVersionResponse {
        content: string // 编辑区域内容
    }
}