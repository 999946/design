declare namespace Http {
    /**
     * 响应基础结构
     */
    export interface Response<T> {
        errno?: number
        errmsg?: string
        data?: T
    }

    /**
     * 分页结构
     */
    export interface ListData<T> {
        list: Array<T>
        page: Page
    }

    /**
     * 分页中表示信息
     */
    export interface Page {
        all_page: number
        current_page: number
    }

    /**
     * 分页请求
     */
    export interface ListRequest {
        pn: number
        rn: number
    }
}