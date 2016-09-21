import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    value?: any;
    defaultValue?: any;
    vertical?: boolean;
    onChange?: (value: any) => void;
    type?: string;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    value: any;
    vertical: boolean;
    onChange: () => void;
}
export interface StateDefine {
    value?: any;
}
export declare class State implements StateDefine {
}
