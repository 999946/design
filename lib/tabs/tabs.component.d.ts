import * as React from 'react';
import * as typings from './tabs.type';
import './tabs.scss';
export default class Tabs extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    previousTitleIndex: number;
    dom: Element;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    setActive(value: string | number, index: number): void;
    handleTitleClick(value: string | number, index: number): void;
    render(): JSX.Element;
}
