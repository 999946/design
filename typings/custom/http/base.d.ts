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
        list: T
        page: Page
    }

    export interface Page {
        all_page: number
        current_page: number
    }
}