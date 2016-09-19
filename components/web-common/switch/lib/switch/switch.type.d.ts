import * as React from 'react';
export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    onChange?: (checked?: boolean) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: string;
    type?: string;
    labelWidth?: number;
    checkedChildrenRender?: React.ReactElement<any>;
    unCheckedChildrenRender?: React.ReactElement<any>;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    checked: any;
    defaultChecked: any;
    onChange: () => void;
    size: string;
    type: string;
    checkedChildrenRender: any;
    unCheckedChildrenRender: any;
}
export interface StateDefine {
    checked?: boolean;
}
export declare class State implements StateDefine {
    checked: boolean;
}
