import * as React from 'react';
export interface PropsDefine extends React.HTMLAttributes {
    vertical?: boolean;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    vertical: boolean;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
