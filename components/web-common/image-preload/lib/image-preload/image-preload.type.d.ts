export interface PropsDefine {
    pictureUrls?: Array<string>;
    callback?: () => void;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
