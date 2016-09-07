export interface PropsDefine {
    pictureSource?: {
        uri: string;
    } | string;
    title: string;
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
export declare class Props extends PropsGaea implements PropsDefine {
    title: string;
    pictureSource: any;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
