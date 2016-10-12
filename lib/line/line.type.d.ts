import * as React from 'react';
import { ViewProperties } from 'react-native';
import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
export interface PropsDefine extends ViewProperties, TransparentlyNativePropsPropsDefine {
    width?: number;
    color?: string;
    lineType?: LineType;
    vertical?: boolean;
    style?: React.ViewStyle;
}
export declare class Props implements PropsDefine {
    width: number;
    color: string;
    lineType: "solid" | "dotted" | "dashed";
    vertical: boolean;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
export declare type LineType = 'solid' | 'dotted' | 'dashed';
