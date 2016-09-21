import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    value?: string;
    disabled?: boolean;
    onChange?: (checked?: boolean) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    size?: string;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    disabled: boolean;
    onChange: () => void;
    defaultChecked: boolean;
}
export interface StateDefine {
    checked?: boolean;
}
export declare class State implements StateDefine {
}
