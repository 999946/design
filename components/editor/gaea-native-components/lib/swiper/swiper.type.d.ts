import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import { SwiperPropsDefine } from  'nt-swiper';
import * as ReactNaitve from 'react-native';
export interface PropsDefine extends SwiperPropsDefine, TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    canDragIn: boolean;
    gaeaEdit: (string | {
        field: any;
        label: string;
        editor: string;
        editable: boolean;
    } | {
        label: string;
        field: string;
        editor: string;
        type: string;
    })[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    maxDistance: number;
    threshold: number;
    thresholdSpeed: number;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
