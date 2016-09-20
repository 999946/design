import * as React from 'react';
import * as typings from './tree-node.type';
import './tree-node.scss';
export default class Tree extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    handleContainerClick(event: Event): void;
    handleArrowClick(event: Event): void;
    render(): JSX.Element;
}
