import * as React from 'react';
import { TouchableOpacityProperties } from 'react-native';
export interface PropsDefine extends TouchableOpacityProperties {
    size?: number;
    fontSize?: number;
    style?: React.ViewStyle;
    textStyle?: React.TextStyle;
    type?: ButtonType;
}
export declare class Props implements PropsDefine {
    size: number;
    fontSize: number;
    style: {};
    textStyle: {};
    type: ButtonType;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
export declare type ButtonType = 'normal' | 'light';
