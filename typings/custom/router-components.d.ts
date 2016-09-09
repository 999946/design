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
        // 定义文件路径
        typePath: string
    }

    export interface ComponentFullInfo {
        packageJson: Components.PackageJson
        demos: Array<Demo>
        documents: Array<Document>
        // 组件主入口
        main: any
    }

    export interface ThirdComponentFullInfo {
        // 定义文件源码
        typings: string
    }

    /**
     * 继承的组件数据
     */
    export interface ExtendInfo {
        // 引用类型
        type: 'component' | 'npm'
        // 依赖自己的组件信息
        category?: Components.Category
        component?: Components.ComponentConfig
        // npm 模块明
        moduleName?: string
        // 依赖的模块名
        extendName: string
    }
}