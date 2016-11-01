declare namespace FitGaea {
    export class _ {

    }

    /**
     * 组件信息
     */
    export interface ComponentProps extends __React.HTMLProps<any> {
        /**
         * 唯一的 key,用来唯一标识这个组件,所有盖亚内部组件都以 gaea- 为前缀
         */
        gaeaUniqueKey: string
        /**
         * 组件的中文名
         */
        gaeaName: string
        /**
         * 组件图标,为 fontAwesome
         */
        gaeaIcon?: string
        /**
         * 编辑信息
         */
        gaeaEdit?: Array<ComponentPropsGaeaEdit>
        /**
         * 事件定义
         */
        gaeaEvent?: GaeaEvent
        /**
         * 是否在预览模式，preivew 会传入 true
         */
        gaeaPreview?: boolean
        /**
         * 是否可以拖入子元素
         */
        canDragIn?: boolean
        /**
         * 存储事件设置
         */
        gaeaEventData?: Array<EventData>
        /**
         * 存储native事件设置
         */
        gaeaNativeEventData?: Array<EventData>
        /**
         * 存储变量信息
         */
        gaeaVariables?: Array<VariableData>

        [x: string]: any
    }

    /**
     * 组件配置中数组配置
     */
    export interface ComponentPropsOptionsArray extends ComponentPropsGaeaEdit {
        key: string
    }

    /**
     * 组件配置中数组配置的值
     */
    export interface ComponentPropsOptionsArrayValue {
        /**
         * ComponentPropsOptionsArray 设置的 key
         */
        key: string
        /**
         * 用户填入的值
         */
        value: number|string
    }

    /**
     * 组件配置 选择器配置
     */
    export interface ComponentPropsOptionsSelector {
        key: string
        value: string
    }

    /**
     * number 配置项
     */
    export interface Number {
        // 为空时，是数字，否则会以字符串加后缀形式赋值
        key: string
        value: string
    }

    /**
     * 组件的值
     */
    export type ComponentPropsOptionValue = number|string|boolean|Array<ComponentPropsOptionsArrayValue>|any

    /**
     * 组件配置
     */
    export interface ComponentPropsGaeaEdit {
        /**
         * 对应字段名
         */
        field: string
        /**
         * 选项名称
         */
        label: string
        /**
         * 编辑器类型
         */
        editor: string
        /**
         * 是否可被编辑
         */
        editable: boolean
        /**
         * 当 editor 为 array 时的数组配置
         * 数组中的 key,和填入的值,会作为 Array<key:value> 填入到 value 中
         */
        array?: Array<ComponentPropsOptionsArrayValue>
        /**
         * 当 editor 为 selector 时的数组配置
         */
        selector?: Array<ComponentPropsOptionsSelector>
        /**
         * 值类型, 默认为字符串
         */
            type?: string
        /**
         * 为空时的值，默认为 null
         */
        emptyValue?: any
        /**
         * 控制 number 单位
         */
            number?: {
            units: Array<Number>
            currentUnit: string
            max?: number
            min?: number
            step?: number
            speed?: number
            inputRange?: Array<number>
            outputRange?: Array<number>
            slider?: boolean
        }
        /**
         * 枚举实例
         */
        instance?: Array<{
            [key: string]: ComponentPropsOptionValue
        }>
        /**
         * 是否可以为变量
         */
        canVariable?: boolean
    }

    /**
     * 组合信息
     */
    export interface ComboComponentInfo extends ViewportComponentFullInfo {
        // 组合名
        name: string
    }

    /**
     * 获取发布列表的返回值
     */
    export interface GetPublishListResult {
        // 版本
        version: string
        // 描述
        description: string
    }

    /**
     * 版本信息
     */
    export interface VersionInfo {
        content: string
    }

    /**
     * 事件设置
     */
    export interface GaeaEvent {
        types: Array<EventTriggerCondition>
        events: Array<EventAction>
    }

    export interface EventData {
        type: string
        event: string
        /**
         * 因为事件可能 type 相同，因此记录是第几个
         */
        typeIndex: number
        eventIndex: number
        typeData?: EventTriggerEvent
        eventData?: EventActionJumpUrl | EventActionCall | EventActionEvent
    }

    export interface EventTriggerCondition {
        name: string
        // 触发类型
        type: string
        // 是否由自己的生命周期触发
        selfCallback?: boolean
    }

    export interface EventAction {
        name: string
        // 动作类型
        // call: 调用传进来的方法
        // jumpUrl: 跳转一个网址
        event: string
        call?: EventCallType
    }

    /**
     * 事件定义类型
     */
    export interface EventCallType {
        // 调用函数名称
        functionName: string
        // 调用参数
        param?: Array<EventCallTypeParam>
    }

    export interface EventCallTypeParam {
        label: string
        field: string
        editor: string // text
    }

    /**
     * 事件触发数据类型
     */
    export interface EventTriggerEvent {
        listen?: string
    }

    export interface EventUpdatePropsEvent {
        /**
         * 修改后的 props
         */
        props: ComponentProps
    }

    /**
     * 事件动作数据类型
     */
    export interface EventActionJumpUrl {
        url?: string
    }

    export interface EventActionCall {
        // 函数在 map 里的 key
        key?: string
    }

    export interface EventActionEvent {
        emit?: string
    }

    export interface GlobalParam {
        /**
         * 名称
         */
        name: string
        /**
         * 类型
         * number string boolean
         */
            type: string
    }

    /**
     * 标识哪些字段用什么变量
     */
    export interface VariableData {
        field: string
        // 变量类型 globalParam
        variableType: string
        // 值类型 string number boolean
        valueType: string
        // 变量的哪个字段
        variableField: string
    }
}