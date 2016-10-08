import * as React from 'react';
import { CSSProperties } from 'react';
export interface PropsDefine {
    style?: CSSProperties;
    className?: string;
    children?: React.ReactElement<any>;
    others?: any;
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
