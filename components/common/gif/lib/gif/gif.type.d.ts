import * as React from 'react';
import * as ReactNative from 'react-native';
export interface PropsDefine extends ReactNative.ViewProperties {
    source: {
        uri: string;
    } | string;
    firstSource?: {
        uri: string;
    } | string;
    fallbackSource?: {
        uri: string;
    } | string;
    fallbackColor?: string;
    fallbackHideImage?: boolean;
    fallbackAddon?: () => React.ReactElement<any>;
    pressToReload?: boolean;
    onPress?: () => void;
    onLayout?: (event: ReactNative.LayoutChangeEvent) => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    onLoadStart?: () => void;
    resizeMode?: "cover" | "contain" | "stretch";
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
