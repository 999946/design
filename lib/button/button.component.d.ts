import * as React from 'react';
import * as typings from './button.type';
import './button.scss';
export default class Button extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private selfDom;

    componentDidMount(): void;

    handleClick(event: React.MouseEvent): void;

    render(): JSX.Element;
}
