declare namespace Http {
    /**
     * 返回应用列表请求
     */
    export interface AppListRequest {
        sort_by: 'created' | 'last_published' | 'last_modified'
    }

    /**
     * 返回应用列表返回值
     */
    export type AppListResponse = Array<{
        id: string // 应用唯一key
        name: string // 应用名称
        type: 'web' | 'native' // 类型
        published_time: number // 最新发布时间的时间戳
        modified_time: number // 最后修改时间
    }>

    /**
     * 删除应用请求，只能删除自己的应用（管理员不受限制）
     */
    export interface AppDeleteRequest {
        id: string
    }

    /**
     * 创建应用请求
     */
    export interface AppCreateRequest {
        name: string // 应用名称
    }

    /**
     * 创建应用返回值
     */
    export interface AppCreateResponse {
        id: string
    }

    /**
     * 全局管理员返回全部应用列表请求
     */
    export interface AppAdminListRequest {
        sort_by: 'created' | 'last_published' | 'last_modified'
    }

    /**
     * 全局管理员返回全部应用列表返回值
     */
    export type AppAdminListResponse = Array<{
        id: string // 应用唯一key
        user: UserInfo // 用户信息
        name: string // 应用名称
        type: 'web' | 'native' // 类型
        published_time: number // 最新发布时间的时间戳
        modified_time: number // 最后修改时间
    }>
}