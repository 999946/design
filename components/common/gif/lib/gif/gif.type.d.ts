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
    pressToReload?: boolean;
    onPress?: () => void;
    onLayout?: (event: ReactNative.LayoutChangeEvent) => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    onLoadStart?: () => void;
    resizeMode?: "cover" | "contain" | "stretch";
    style?: ReactNative.ImageStyle;
    testID?: string;
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
    source?: {
        uri: string;
    } | string;
}
export declare class State implements StateDefine {
    source: string;
}
