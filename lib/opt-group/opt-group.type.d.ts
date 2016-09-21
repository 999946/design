import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    label: string;
    ignoreChildren?: boolean;
    onClick?: (value: string, value2: string) => void;
    active?: boolean;
    optChildren?: any;
    setLabelValue?: (value?: string) => void;
    activeValue?: string;
    searchValue?: string;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    label: string;
    ignoreChildren: boolean;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
