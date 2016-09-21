export interface PropsInterface {
    text?: string;
    fontSize?: number;
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
    text: string;
    fontSize: number;
}
export interface StateInterface {
}
export declare class State implements StateInterface {
}
