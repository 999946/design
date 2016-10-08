import * as React from 'react';
import { HTMLAttributes } from 'react';
export interface TypeInterface {
    Default: string;
    Primary: string;
    Success: string;
    Info: string;
    Warning: string;
    Danger: string;
    Dark: string;
}
export declare const Type: TypeInterface;
export interface PropsDefine extends HTMLAttributes {
    type?: string;
    disabled?: boolean;
    active?: boolean;
    loading?: boolean;
    rounded?: boolean;
    addonLeft?: any;
    addonRight?: any;
    onClick?: (event?: React.MouseEvent) => void;
    others?: any;
}
export declare class Props implements PropsDefine {
    type: string;
    disabled: boolean;
    active: boolean;
    loading: boolean;
    rounded: boolean;
    addonLeft: any;
    addonRight: any;
    onClick: () => void;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
