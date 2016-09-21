import * as React from 'react';
import * as typings from './option.type';
import './option.scss';
export default class Select extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    handleClick(): void;
    render(): JSX.Element;
}
