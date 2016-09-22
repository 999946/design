export interface PropsInterface {
    defaultChecked?: boolean;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: {
        field: string;
        label: string;
        editor: string;
        editable: boolean;
    }[];
}
export declare class Props extends PropsGaea implements PropsInterface {
    defaultChecked: boolean;
}
export interface StateInterface {
    checked?: boolean;
}
export declare class State implements StateInterface {
    checked: boolean;
}
