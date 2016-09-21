import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    header?: string;
    active?: boolean;
    activeKey?: string | number;
    onChange?: (activeKey?: string | number) => void;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    active: boolean;
    activeKey: string;
    onChange: () => void;
}
export interface StateDefine {
    contentHeight?: number;
    finish?: boolean;
}
export declare class State implements StateDefine {
    contentHeight: number;
    finish: boolean;
}
