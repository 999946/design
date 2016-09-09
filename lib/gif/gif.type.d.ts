import { ImagePropsDefine } from  'nt-gif';
export interface PropsDefine extends ImagePropsDefine {
    firstSource?: {
        uri: string;
    } | string;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    source: string;
    onPress: () => void;
}
export interface StateDefine {
    source?: {
        uri: string;
    } | string;
}
export declare class State implements StateDefine {
    source: string;
}
