import { HTMLAttributes } from 'react';
export interface PropsDefine extends HTMLAttributes {
    count?: number;
    dot?: boolean;
    overflowCount?: number;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    count: number;
    dot: boolean;
    overflowCount: number;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
