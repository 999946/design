import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    cancelText?: string;
    okText?: string;
    show?: boolean;
    title?: string;
    onOk?: () => void;
    onCancel?: () => void;
    renderOperateButton?: (onOk?: () => void, onCancel?: () => void) => void;
    backdropClickToClose?: boolean;
    size?: string;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    cancelText: string;
    okText: string;
    show: boolean;
    title: string;
    onOk: () => void;
    onCancel: () => void;
    renderOperateButton: () => void;
    backdropClickToClose: boolean;
    size: string;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
