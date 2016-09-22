export interface PropsInterface {
    width?: number;
    minWidth?: number;
    height?: number;
    minHeight?: number;
    flex?: number;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    backgroundColor?: string;
    overflowX?: string;
    overflowY?: string;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: ({
        field: string;
        label: string;
        type: string;
        editor: string;
        editable: boolean;
        notNullValue: number;
        canNull: boolean;
    } | {
        field: string;
        label: string;
        editor: string;
        type: string;
        editable: boolean;
        canNull: boolean;
    } | {
        field: string;
        label: string;
        editor: string;
        editable: boolean;
        selector: {
            key: string;
            value: string;
        }[];
    })[];
}
export declare class Props extends PropsGaea implements PropsInterface {
    flex: any;
    height: number;
    minHeight: number;
    width: number;
    minWidth: number;
    justifyContent: string;
    alignItems: string;
    flexDirection: string;
    flexWrap: string;
    backgroundColor: string;
    overflowX: string;
    overflowY: string;
}
export interface StateInterface {
}
export declare class State implements StateInterface {
}
