declare namespace CommonModel {
    export interface Response<T> {
        errno: number
        errmsg: string
        data: T
    }
}