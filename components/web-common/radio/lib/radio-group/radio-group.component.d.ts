import * as React from 'react';
import * as typings from './radio-group.type';
import './radio-group.scss';
export default class RadioGroup extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    constructor(props: typings.PropsDefine);
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    handleChange(value: any, checked: boolean): void;
    render(): JSX.Element;
}
