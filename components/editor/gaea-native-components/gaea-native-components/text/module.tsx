export interface PropsInterface {
    text?: string
    fontSize?: number
}

export class PropsGaea {
    gaeaName = '文字'
    gaeaIcon = 'font'
    gaeaUniqueKey = 'gaea-text'
    gaeaEdit = [{
        field: 'text',
        label: '内容',
        editor: 'text',
        editable: true
    }, {
        field: 'fontSize',
        label: '字体大小',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    text = '段落文字'
    fontSize = 14
}

export interface StateInterface {

}

export class State implements StateInterface {

}