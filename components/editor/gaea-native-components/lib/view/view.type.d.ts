import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import * as ReactNaitve from 'react-native';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle;
    onClick?: () => void;
    gaeaEvent?: FitGaea.GaeaEvent;
    gaeaEventData?: Array<FitGaea.EventData>;
    gaeaPreview?: boolean;
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
    })[];
    gaeaEvent: {
        triggers: {
            name: string;
            type: string;
            selfCallback: boolean;
        }[];
        effects: ({
            name: string;
            type: string;
        } | {
            name: string;
            type: string;
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
