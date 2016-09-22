export interface PropsInterface {
    fontSize?: number;
    placeholder?: string;
    width?: number;
    height?: number;
    flex?: number;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: ({
        field: string;
        label: string;
        editor: string;
        editable: boolean;
    } | {
        field: string;
        label: string;
        editor: string;
        editable: boolean;
        canNull: boolean;
    } | {
        field: string;
        label: string;
        type: string;
        editor: string;
        editable: boolean;
        canNull: boolean;
    })[];
}
export declare class Props extends PropsGaea implements PropsInterface {
    fontSize: number;
    placeholder: string;
    width: number;
    height: number;
    flex: number;
}
export interface StateInterface {
}
export declare class State implements StateInterface {
}
