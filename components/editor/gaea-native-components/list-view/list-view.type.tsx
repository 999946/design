import {TransparentlyNativePropsPropsDefine} from 'nt-transparently-native-props'
import {gaeaHelper} from 'gaea-helper'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
    /**
     * 【注入】是否在预览状态
     */
    gaeaPreview?: boolean

    /**
     * 数据请求地址
     */
    apiUrl?: string

    /**
     * 使用结果的哪个字段，比如 data，如果直接用结果，此项为空
     * 默认数据结构为
     * data: {
     *  list: Array<any>
     *  page: {
     *    current_pn: number
     *    has_more: number
     *  }
     * }
     */
    listPath?: string
}

export class PropsGaea {
    gaeaName = 'ListView'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-list-view'
    canDragIn = true
    gaeaEdit = [
        'ListView',
        {
            field: 'apiUrl',
            label: '请求接口地址',
            editor: 'text'
        },
        {
            field: 'listPath',
            label: '使用字段路径',
            editor: 'text'
        },
        '布局',
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
    ]
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign(
        {},
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight
    )
    apiUrl = ''
    listPath = ''
}

export interface StateDefine {
    dataSource?: ReactNaitve.ListViewDataSource
    /**
     * 初始化请求是否完毕
     */
    initRequestFinished?: boolean
    /**
     * 是否在请求过程中
     */
    fetching?: boolean
    /**
     * 是否还有更多内容可以继续加载
     */
    hasMore?: boolean
    /**
     * 当前页数
     */
    page?: number
    /**
     * 请求数据
     */
    lists?: any[]
}

export class State implements StateDefine {
    dataSource = new ReactNaitve.ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    initRequestFinished = false
    fetching = false
    hasMore = false
    page = null as any
    lists = [] as any[]
}