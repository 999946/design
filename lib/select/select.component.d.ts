import * as React from 'react';
import * as typings from './select.type';
import './select.scss';
export default class Select extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private handleDocumentClick;
    private _isMounted;
    private dom;
    private firstLabelValue;
    constructor(props: any);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleSelectClick(): void;
    handleClick(value: string, label: string, children?: Array<typings.Options>, zIndex?: number): void;
    handleSearchChange(event: any): void;
    handleSetLabelValue(labelValue: string): void;
    getOptionChildren(): JSX.Element;
    getOptionChildrenByOptions(): JSX.Element;
    getOptionItemByType(item: typings.Options, key: number, activeValue: string, zIndex?: number): React.ReactElement<any>;
    dropIconRender(): JSX.Element;
    render(): JSX.Element;
}
