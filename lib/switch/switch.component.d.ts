import * as React from 'react';
import * as typings from './switch.type';
import './switch.scss';
export default class Switch extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    toggle(): void;
    render(): JSX.Element;
}
