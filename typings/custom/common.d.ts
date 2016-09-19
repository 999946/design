declare namespace CommonModel {
    export interface Response<T> {
        errno: number
        errmsg: string
        data: T
    }

    /**
     * TODO: ts 暂时不支持 override，所以只有先继承这个
     */
    export interface TransmitTransparentlyProps {
        className ?: string
        style?: any
    }
}