declare namespace Http {
    /**
     * 预览请求
     */
    export interface PreviewRequest {
        id: string
    }

    /**
     * 预览返回
     */
    export interface PreviewResponse {
        content: string // 编辑区域内容
    }
}