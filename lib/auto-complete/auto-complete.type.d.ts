import { InputPropsDefine } from  'nt-web-input';
export interface PropsDefine extends InputPropsDefine {
    datas?: any;
    autoFilter?: boolean;
    maxNumber?: number;
    method?: string;
    url?: string;
    onSelect?: (value: any) => void;
    beforeSend?: (value: any) => any;
    complete?: (res: any) => any;
    parse?: parseInterface;
    delay?: number;
}
export declare class Props implements PropsDefine {
    datas: any;
    autoFilter: boolean;
    maxNumber: number;
    method: string;
    url: string;
    onSelect: (value: string | number) => void;
    beforeSend: (value: string | number) => string | number;
    complete: (res: any) => any;
    parse: {
        text: string;
        value: string;
    };
    delay: number;
}
export interface StateDefine {
    showComplete?: boolean;
    datas?: any;
    filterDatas?: any;
    value?: string;
    selectIndex?: number;
}
export declare class State implements StateDefine {
    showComplete: boolean;
    datas: any[];
    filterDatas: any[];
    value: string;
    selectIndex: number;
}
export interface parseInterface {
    text?: string;
    value?: string;
}
