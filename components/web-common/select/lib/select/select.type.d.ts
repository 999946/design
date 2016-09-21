import { InputPropsDefine } from  'nt-web-input';
export interface PropsDefine extends InputPropsDefine {
    cascaderFull?: boolean;
    search?: boolean;
    simple?: boolean;
    options?: Array<Options>;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    onChange: () => void;
    search: boolean;
    simple: boolean;
    value: string;
    defaultValue: string;
    options: any[];
    cascaderFull: boolean;
}
export interface StateDefine {
    open?: boolean;
    value?: string;
    searchValue?: string;
    labelValue?: string;
    cascader?: Array<cascaderOption>;
}
export declare class State implements StateDefine {
    open: boolean;
    searchValue: string;
    labelValue: string;
    cascader: any[];
}
export interface Options {
    key: string;
    value: string;
    children?: Array<Options>;
    groupValue?: string;
}
export interface cascaderOption {
    value: string;
    options: Array<Options>;
    labelValue?: string;
}
