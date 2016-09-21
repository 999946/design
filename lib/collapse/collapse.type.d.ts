export interface PropsDefine  {
    accordion?: boolean;
    onChange?: (key?: number | string) => void;
    value?: string | number | Array<number | string>;
    defaultValue?: string | number | Array<number | string>;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    accordion: boolean;
    onChange: () => void;
}
export interface StateDefine {
    value?: Array<number | string>;
}
export declare class State implements StateDefine {
}
