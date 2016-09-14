import { GifPropsDefine } from  'nt-gif';
export interface PropsDefine extends GifPropsDefine {
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    source: string;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
