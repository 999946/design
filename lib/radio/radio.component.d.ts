import * as React from 'react';
import * as typings from './radio.type';
import './radio.scss';
export default class Radio extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;

    constructor(props: typings.PropsDefine);

    componentWillReceiveProps(nextProps: typings.PropsDefine): void;

    handleChange(event: any): void;

    render(): JSX.Element;
}
