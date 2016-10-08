import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    selector?: string;
}
export declare class Props implements PropsDefine {
    selector: string;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
