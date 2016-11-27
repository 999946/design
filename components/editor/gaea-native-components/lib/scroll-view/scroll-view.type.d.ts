import { ScrollViewProperties } from 'react-native';
export interface PropsDefine extends ScrollViewProperties {
    gaeaEvent?: FitGaea.GaeaEvent;
    gaeaEventData?: Array<FitGaea.EventData>;
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
        field: string;
        label: string;
        editor: string;
    } | {
        field: string;
        label: string;
        editor: string;
        type: string;
    })[];
    gaeaEvent: {
        triggers: {
            name: string;
            type: string;
            selfCallback: boolean;
        }[];
        effects: any;
    };
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    horizontal: boolean;
    scrollEventThrottle: number;
    onScroll: () => void;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
