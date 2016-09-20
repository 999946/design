import * as React from 'react';
export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    activeKey?: string;
    tab?: string;
    tabRender?: (isActive?: boolean) => React.ReactElement<any>;
    active?: boolean;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    activeKey: string;
    tab: string;
    active: boolean;
    tabRender: () => any;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
