import * as React from 'react';
export declare type Position = 'left' | 'top' | 'right' | 'bottom';
export interface PropsDefine {
    title?: string;
    titleRender?: () => React.ReactElement<any>;
    position?: Position;
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
    position: "left" | "top" | "right" | "bottom";
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
