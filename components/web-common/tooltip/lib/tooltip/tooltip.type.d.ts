import * as React from 'react';
import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
import { CSSProperties } from 'react';
export declare type Position = 'left' | 'top' | 'right' | 'bottom';
export declare type ShowType = 'hover' | 'click';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    title?: string;
    titleRender?: () => React.ReactElement<any>;
    position?: Position;
    zIndex?: number;
    shadowZIndex?: number;
    shadowStyle?: CSSProperties;
    type?: ShowType;
    showShadow?: boolean;
    simple?: boolean;
}
export declare class Props implements PropsDefine {
    title: string;
    titleRender: () => JSX.Element;
    zIndex: number;
    shadowZIndex: number;
    position: Position;
    type: ShowType;
    showShadow: boolean;
    simple: boolean;
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
