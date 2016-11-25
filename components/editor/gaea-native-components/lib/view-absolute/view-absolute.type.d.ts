import * as CustomView from '../view/view.type';
export interface PropsDefine extends CustomView.PropsDefine {
}
export declare class PropsGaea extends CustomView.PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
