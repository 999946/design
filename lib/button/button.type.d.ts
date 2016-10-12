import * as React from 'react';
import { TouchableOpacityProperties } from 'react-native';
import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
export interface PropsDefine extends TouchableOpacityProperties, TransparentlyNativePropsPropsDefine {
    style?: React.ViewStyle;
    activeStyle?: React.ViewStyle;
    textStyle?: React.TextStyle;
    activeTextStyle?: React.TextStyle;
}
export declare class Props implements PropsDefine {
    activeOpacity: number;
    activeStyle: {};
    textStyle: {};
    activeTextStyle: {};
}
export interface StateDefine {
    active?: boolean;
}
export declare class State implements StateDefine {
    active: boolean;
}
