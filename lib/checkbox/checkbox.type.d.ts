import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked?: boolean) => void;
    disabled?: boolean;
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
    size: string;
}
export interface StateDefine {
    checked?: boolean;
}
export declare class State implements StateDefine {
}
