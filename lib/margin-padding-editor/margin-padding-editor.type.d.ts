export declare type MarginPaddingField = 'paddingLeft' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'marginLeft' | 'marginTop' | 'marginRight' | 'marginBottom' | '';
export interface PropsDefine {
    onStart?: () => void;
    onChange?: (type: MarginPaddingField, value: number) => void;
    onFinalChange?: (type?: MarginPaddingField, value?: number) => void;
    size?: number;
    paddingLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    others?: any;
    classNames?: string;
}
export declare class Props implements PropsDefine {
    size: number;
    onChange: () => void;
    onFinalChange: () => void;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    marginLeft: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    onStart: () => void;
}
export interface StateDefine {
    paddingLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    [x: string]: any;
}
export declare class State implements StateDefine {
}
