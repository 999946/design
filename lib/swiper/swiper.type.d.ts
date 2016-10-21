import { ViewProperties } from 'react-native';
export interface PropsDefine extends ViewProperties {
    maxDistance?: number;
    threshold?: number;
    thresholdSpeed?: number;
}
export declare class Props implements PropsDefine {
    maxDistance: number;
    threshold: number;
    thresholdSpeed: number;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
