import * as React from 'react';
import { ImageProperties } from 'react-native';
export interface PropsDefine extends ImageProperties {
    fallbackSource?: {
        uri: string;
    } | string;
    fallbackColor?: string;
    pressToReload?: boolean;
    onPress?: () => void;
    fallbackAddon?: () => React.ReactElement<any>;
    fallbackHideImage?: boolean;
    onError?: () => void;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    source: string;
    pressToReload: boolean;
    onPress: () => void;
    fallbackAddon: () => any;
    onError: () => void;
    fallbackHideImage: boolean;
}
export interface StateDefine {
    source?: {
        uri: string;
    } | string;
    loadImageSuccess?: boolean;
}
export declare class State implements StateDefine {
    source: string;
    loadImageSuccess: boolean;
}
