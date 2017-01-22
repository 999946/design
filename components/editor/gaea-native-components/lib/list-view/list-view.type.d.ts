import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import * as ReactNaitve from 'react-native';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle;
    gaeaPreview?: boolean;
    apiUrl?: string;
    listPath?: string;
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
    })[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: {} & {
        paddingLeft: number;
        paddingTop: number;
        paddingRight: number;
        paddingBottom: number;
        marginLeft: number;
        marginTop: number;
        marginRight: number;
        marginBottom: number;
    } & {
        opacity: number;
    } & {
        height: any;
        minHeight: any;
        maxHeight: any;
        width: any;
        minWidth: any;
        maxWidth: any;
    };
    apiUrl: string;
    listPath: string;
}
export interface StateDefine {
    dataSource?: ReactNaitve.ListViewDataSource;
    initRequestFinished?: boolean;
    fetching?: boolean;
    hasMore?: boolean;
    page?: number;
    lists?: any[];
}
export declare class State implements StateDefine {
    dataSource: ReactNaitve.ListViewDataSource;
    initRequestFinished: boolean;
    fetching: boolean;
    hasMore: boolean;
    page: any;
    lists: any[];
}
