import * as React from 'react';
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
export interface PropsDefine extends React.HTMLAttributes {
    type?: string;
    disabled?: boolean;
    active?: boolean;
    loading?: boolean;
    rounded?: boolean;
    addonLeft?: any;
    addonRight?: any;
    onClick?: (event?: React.MouseEvent) => void;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
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
