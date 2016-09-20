export interface PropsDefine extends CommonModel.TransmitTransparentlyProps {
    defaultActiveKey?: string | number;
    activeKey?: string | number;
    onChange?: (key?: string | number) => void;
    type?: Type;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    defaultActiveKey: any;
    activeKey: any;
    onChange: () => void;
}
export declare type Type = 'retro';
export interface StateDefine {
    activeKey?: string | number;
    moveBarStyle?: any;
    isForward?: boolean;
}
export declare class State implements StateDefine {
    moveBarStyle: {};
    isForward: boolean;
}
