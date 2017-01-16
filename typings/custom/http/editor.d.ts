declare namespace Http {
    /**
     * 创建编辑器请求参数
     */
    export interface EditorCreateRequest {
        app_type: number // 1:web 2:native
        access_level: number // 1:private 2:public
        app_name: string // 名称
        app_intro: string // 描述信息
    }

    export interface EditorCreateResponse {
        app_id: string
    }

    /**
     * 根据 appId 获取编辑器信息
     */
    export interface EditorGetRequest {
        app_id: string
    }

    /**
     * 获取编辑列表的请求参数
     */
    export interface EditorListRequest extends ListRequest {
        user_id?: string // null 表示获取自己的 0 表示获取公共的
        access_level?: number // 2 表示管理员可以获取私有的
    }

    /**
     * 编辑器返回结构
     */
    export interface EditorResponse {
        app_id: string // 应用唯一 key
        app_name: string // 应用名称
        app_intro: string // 编辑区域内容
        access_level: number
        app_type: string
        create_time: string // 单位秒，创建时间
        update_time: string // 单位秒，最后编辑时间
        user_id: string // 所属用户id
        settings: string // 编辑配置
        active_ver: string // 当前发布的版本号
        latest_ver: string // 最大版本号
    }

    /**
     * 获取编辑器内容请求
     */
    export interface EditorContentRequest {
        app_id: string
        version?: string // 不传版本号为读取当前的
    }

    export interface EditorContentResponse {
        content: string
        settings: string
        app_name: string
    }

    /**
     * 保存请求
     */
    export interface EditorSaveContentRequest {
        app_id: string
        content: string
    }

    export interface EditorSaveInfoRequest {
        app_id: string
        app_name?: string
        app_intro?: string
        settings?: string
        access_level?: number
    }

    /**
     * 发布请求
     */
    export interface EditorPublishRequest {
        app_id: string
        version: string // 版本号
    }

    /**
     * 切换到某个版本号请求参数
     */
    export interface EditorChangePublishVersionRequest {
        app_id: string
        version: string
    }

    /**
     * 切换到某个版本号返回值
     */
    export interface EditorChangePublishVersionResponse {
        content: string // 编辑区域内容
    }

    /**
     * 获取版本列表的请求
     */
    export interface EditorGetVersionListRequest extends ListRequest {
        app_id: string
    }

    /**
     * 获取版本列表的返回值
     */
    export interface EditorGetVersionListResponse {
        app_id: string
        version: string
        description: string
        create_time: string
    }
}