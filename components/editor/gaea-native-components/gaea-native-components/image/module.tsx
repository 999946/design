export interface PropsInterface {
    text?: string
    fontSize?: number
}

export class PropsGaea {
    gaeaName = '图片'
    gaeaIcon = 'font'
    gaeaUniqueKey = 'gaea-text'
    gaeaEdit = [{
        field: 'source',
        label: '字体大小',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    source = '段落文字'
}

export interface StateInterface {

}

export class State implements StateInterface {

}