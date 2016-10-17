declare namespace Http {
    /**
     * 用户接口返回
     */
    export interface UserProfileResponse {
        anti: {
            tbs: string
        }
        user: UserInfo
    }

    /**
     * 用户信息
     */
    export interface UserInfo {
        user_id: number
        user_name: string
        user_sex: number // 1: 男
        portrait: string // 头像地址
        name_show: string // 实际显示的用户名
        is_login: boolean // 是否登录
        is_admin: boolean // 是否是全局管理员（手动设置）
        can_create: boolean // 是否能创建
        can_publish: boolean // 是否能发布
    }

    /**
     * 管理员封禁用户请求
     */
    export interface UserBanRequest {
        user_id: number
        type: 'create' | 'publish' // 操作类型
        active: boolean // true 表示是否可以进行此操作
    }
}