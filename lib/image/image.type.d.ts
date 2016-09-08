import * as React from 'react';
import * as ReactNative from 'react-native';
export interface PropsDefine extends ReactNative.ImageProperties {
    fallbackSource?: {
        uri: string;
    } | string;
    fallbackColor?: string;
    pressToReload?: boolean;
    onPress?: () => void;
    fallbackAddon?: () => React.ReactElement<any>;
    fallbackHideImage?: boolean;
    onError?: () => void;
    onLayout?: (event: ReactNative.LayoutChangeEvent) => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    onLoadStart?: () => void;
    resizeMode?: "cover" | "contain" | "stretch";
    source: {
        uri: string;
    } | string;
    style?: ReactNative.ImageStyle;
    testID?: string;
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
