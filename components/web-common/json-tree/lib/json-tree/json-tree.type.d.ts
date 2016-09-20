import { TreePropsDefine } from  'nt-web-tree';
export interface PropsDefine extends TreePropsDefine, CommonModel.TransmitTransparentlyProps {
    json: Object;
    root?: boolean;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    json: {};
    root: boolean;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
