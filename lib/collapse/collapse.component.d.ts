import * as React from 'react';
import * as typings from './collapse.type';
export default class Collapse extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;

    constructor(props: any);

    componentWillMount(): void;

    componentWillReceiveProps(nextProps: typings.PropsDefine): void;

    handleChange(key: any): void;

    render(): JSX.Element;
}
