export interface PropsInterface {
    width?: number
    minWidth?: number
    height?: number
    minHeight?: number
    flex?: number
    justifyContent?: string
    alignItems?: string
    flexDirection?: string
    flexWrap?: string
    backgroundColor?: string
    overflowX?: string
    overflowY?: string
}

export class PropsGaea {
    gaeaName = '布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout'
    gaeaEdit = [{
        field: 'flex',
        label: 'flex',
        type: 'number',
        editor: 'text',
        editable: true,
        notNullValue: 1,
        canNull: true
    }, {
        field: 'height',
        label: '高度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 50,
        canNull: true
    }, {
        field: 'minHeight',
        label: '最小高度',
        editor: 'text',
        type: 'number',
        editable: true,
        canNull: true
    }, {
        field: 'width',
        label: '宽度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 50,
        canNull: true
    }, {
        field: 'minWidth',
        label: '最小宽度',
        editor: 'text',
        type: 'number',
        editable: true,
        canNull: true
    }, {
        field: 'justifyContent',
        label: '主轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'space-between',
            value: 'space-between'
        }, {
            key: 'space-around',
            value: 'space-around'
        }]
    }, {
        field: 'alignItems',
        label: '交叉轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'baseline',
            value: 'baseline'
        }, {
            key: 'stretch',
            value: 'stretch'
        }]
    }, {
        field: 'flexDirection',
        label: '布局方向',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'row',
            value: 'row'
        }, {
            key: 'row-reverse',
            value: 'row-reverse'
        }, {
            key: 'column',
            value: 'column'
        }, {
            key: 'column-reverse',
            value: 'column-reverse'
        }]
    }, {
        field: 'flexWrap',
        label: '排列方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'nowrap',
            value: 'nowrap'
        }, {
            key: 'wrap',
            value: 'wrap'
        }, {
            key: 'wrap-reverse',
            value: 'wrap-reverse'
        }]
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    flex = null as any
    height = null as number
    minHeight = 0 as number
    width = null as number
    minWidth = 0 as number
    justifyContent = 'flex-start'
    alignItems = 'stretch'
    flexDirection = 'row'
    flexWrap = 'nowrap'
    backgroundColor = 'white'
    overflowX = 'hidden'
    overflowY = 'hidden'
}

export interface StateInterface {

}

export class State implements StateInterface {

}