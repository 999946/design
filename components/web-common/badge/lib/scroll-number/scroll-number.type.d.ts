import { HTMLAttributes } from 'react';
export interface PropsDefine extends HTMLAttributes {
    count?: number;
    component?: string;
    onAnimated?: () => void;
    height?: number;
    others?: any;
}
export declare class Props implements PropsDefine {
    count: number;
    component: string;
    onAnimated: () => void;
    height: number;
}
export interface StateDefine {
    animateStarted?: boolean;
    count?: number;
}
export declare class State implements StateDefine {
    animateStarted: boolean;
    count: number;
}
