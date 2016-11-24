import * as React from 'react';
import * as typings from './tabs.type';
import './tabs.scss';
export default class Tabs extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private previousTitleIndex;
    private dom;
    private activeIndex;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    handleAnyDomChange(): void;
    setActive(value: string | number, index: number): void;
    handleTitleClick(value: string | number, index: number): void;
    render(): JSX.Element;
}
