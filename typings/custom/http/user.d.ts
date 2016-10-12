declare namespace Http {
    /**
     * 用户基础信息
     */
    export interface UserResponse extends User.FullInfo {
    }

    /**
     * 管理员封禁用户
     */
    export interface UserBanRequest {
        user_id: number
        type: 'create' | 'publish' // 操作类型
        active: boolean // true 表示是否可以进行此操作
    }
}