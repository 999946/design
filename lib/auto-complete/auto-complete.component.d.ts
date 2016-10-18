import * as React from 'react';
import * as typings from './auto-complete.type';
import './auto-complete.scss';
export default class AutoComplete extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private searchValue;
    private handleDocumentClick;
    private _isMounted;
    private dom;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleFocus(): void;
    handleChange(value: string): void;
    filterDatas(datas: any): any;
    handleSelect(text: string, value: string, index: any, close?: boolean, realSelect?: boolean): void;
    handleKeyDown(event: any): void;
    innerRender(items: any, isEmpty: boolean): JSX.Element;
    render(): JSX.Element;
}
