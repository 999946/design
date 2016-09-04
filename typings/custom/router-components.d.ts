/// <reference path="../components.d.ts" />

declare namespace RouterComponentsModel {
    export interface Demo {
        Class: Components.DemoProps<any>
        code: string
    }

    export interface Document {
        type: any
        typeCode: string
        componentName: string
    }

    export interface ComponentFullInfo {
        packageJson: Components.PackageJson
        demos: Array<Demo>
        documents: Array<Document>
        // 组件主入口
        main: any
    }
}