import * as React from 'react';
export interface PropsDefine {
    title?: string;
    titleRender?: () => React.ReactElement<any>;
    zIndex?: number;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    title: string;
    titleRender: () => JSX.Element;
    zIndex: number;
}
export interface StateDefine {
    childrenTop?: number;
    childrenLeft?: number;
    childrenWidth?: number;
    childrenHeight?: number;
    tooltipWidth?: number;
    tooltipHeight?: number;
    show?: boolean;
}
export declare class State implements StateDefine {
    childrenTop: number;
    childrenLeft: number;
    childrenWidth: number;
    childrenHeight: number;
    tooltipWidth: number;
    tooltipHeight: number;
    show: boolean;
}
