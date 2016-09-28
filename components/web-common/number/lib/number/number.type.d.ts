import { InputPropsDefine } from  'nt-web-input';
export interface PropsDefine extends InputPropsDefine {
    min?: number;
    max?: number;
    step?: number;
    float?: number;
    speed?: number;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    min: number;
    max: number;
    step: number;
    float: number;
    speed: number;
    onChange: () => void;
}
export interface StateDefine {
    value?: string;
}
export declare class State implements StateDefine {
}
