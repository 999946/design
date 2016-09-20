export interface PropsDefine {
    type?: string;
    content?: string;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    type: 'info';
}
export interface StateDefine {
    status?: string;
}
export declare class State implements StateDefine {
    status: string;
}
