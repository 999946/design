import * as React from 'react';
export interface PropsDefine {
    hasUnderLine?: boolean;
    left?: () => React.ReactElement<any>;
    leftExt?: () => React.ReactElement<any>;
    center?: () => React.ReactElement<any>;
    rightExt?: () => React.ReactElement<any>;
    right?: () => React.ReactElement<any>;
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
    left: () => JSX.Element;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
