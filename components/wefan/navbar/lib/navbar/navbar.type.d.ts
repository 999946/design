export interface PropsDefine {
    hasUnderLine?: boolean;
    left?: any;
    leftExt?: JSX.Element;
    center?: JSX.Element;
    rightExt?: JSX.Element;
    right?: JSX.Element;
    title?: string;
    titleStyle?: string;
    onLeftPress?: () => any;
    onLeftExtPress?: () => any;
    onRightExtPress?: () => any;
    onRightPress?: () => any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: {
        field: string;
        label: string;
        editor: string;
        editable: boolean;
    }[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    hasUnderLine: boolean;
    title: string;
    left: JSX.Element;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
