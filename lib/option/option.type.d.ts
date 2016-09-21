import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    value?: string;
    disabled?: boolean;
    zIndex?: number;
    onClick?: (value: string, value2: string, value3: any, zIndex: number) => void;
    active?: boolean;
    optChildren?: any;
    setLabelValue?: (value: string) => void;
    activeValue?: string;
    searchValue?: string;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    value: string;
    disabled: boolean;
    zIndex: number;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
