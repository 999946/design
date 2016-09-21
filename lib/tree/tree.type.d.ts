export interface PropsDefine {
    defaultExpendAll?: boolean;
    toggleByArrow?: boolean;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    defaultExpendAll: boolean;
    toggleByArrow: boolean;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
