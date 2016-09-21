export interface PropsInterface {
    defaultChecked?: boolean
}

export class PropsGaea {
    gaeaName = '开关'
    gaeaIcon = 'toggle-on'
    gaeaUniqueKey = 'gaea-switch'
    gaeaEdit = [{
        field: 'defaultChecked',
        label: '默认选中',
        editor: 'switch',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    defaultChecked = false
}

export interface StateInterface {
    checked?: boolean
}

export class State implements StateInterface {
    checked = false
}