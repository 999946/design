import * as React from 'react';
import * as typings from './save.type';
import './save.scss';
export default class Save extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    static position: string;
    handleClick(): void;
    render(): JSX.Element;
}
