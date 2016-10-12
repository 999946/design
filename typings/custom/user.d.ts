declare namespace User {
    /**
     * 完整信息
     */
    export interface FullInfo {
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
}