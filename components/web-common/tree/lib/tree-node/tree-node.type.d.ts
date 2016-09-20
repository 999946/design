export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    title?: string;
    showChildren?: boolean;
    defaultExpendAll?: boolean;
    render?: () => void;
    onToggleShow?: (title?: any) => void;
    onClick?: (event: Event) => void;
    toggleByArrow?: boolean;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    title: string;
    showChildren: boolean;
    defaultExpendAll: boolean;
    toggleByArrow: boolean;
    onToggleShow: () => void;
    render: () => void;
    onClick: () => void;
}
export interface StateDefine {
    showChildren?: boolean;
}
export declare class State implements StateDefine {
    showChildren: boolean;
}
