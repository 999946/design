import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import * as ReactNaitve from 'react-native';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle;
    onClick?: () => void;
    gaeaEvent?: FitGaea.GaeaEvent;
    gaeaEventData?: Array<FitGaea.EventData>;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: (string | {
        field: any;
        label: string;
        editor: string;
        editable: boolean;
    })[];
    gaeaEvent: {
        types: {
            name: string;
            type: string;
            selfCallback: boolean;
        }[];
        events: ({
            name: string;
            event: string;
        } | {
            name: string;
            event: string;
            call: {
                functionName: string;
            };
        })[];
    };
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    onClick: () => void;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
