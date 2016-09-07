import * as ReactNative from 'react-native';
export interface PropsDefine extends ReactNative.ImageProperties {
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
    source: {
        uri: string;
    } | string;
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
    pressToReload: boolean;
}
export interface StateDefine {
    source: {
        uri: string;
    } | string;
}
export declare class State implements StateDefine {
    source: string;
}
