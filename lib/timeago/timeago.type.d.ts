import { HTMLAttributes } from 'react';
export interface PropsDefine extends HTMLAttributes {
    date: Date;
    live?: boolean;
    component?: string;
    loseTime?: number;
    loseFormat?: string;
    minPeriod?: number;
    maxPeriod?: number;
    customLabel?: Label;
    formatter?: (value: number, unit: string, suffix: string, then: any) => string;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    date: Date;
    live: boolean;
    component: string;
    loseTime: number;
    loseFormat: string;
    minPeriod: number;
    maxPeriod: number;
    customLabel: Label;
    formatter: (value: number, unit: string, suffix: string, then: any) => string;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
export declare class Label {
    ago: string;
    fromNow: string;
    second: string;
    minute: string;
    hour: string;
    day: string;
    week: string;
    month: string;
    year: string;
}
