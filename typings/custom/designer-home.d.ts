declare namespace DesignerHomeModel {
    export interface DemoList {
        title: string
        lists: Array<{
            title: string
            description: string
            video: string
            image: string
        }>
    }
}