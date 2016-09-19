import * as React from 'react';
import * as typings from './scroll-number.type';
import './scroll-number.scss';
export default class ScrollNumber extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private lastCount;

    constructor(props: any);

    getPositionByNum(num: number, i: number): number;

    componentWillReceiveProps(nextProps: typings.PropsDefine): void;

    renderNumberList(): any;

    renderCurrentNumber(num: number, i: number): React.DOMElement<{}, Element>;

    renderNumberElement(): any;

    render(): React.DOMElement<{}, Element>;
}
