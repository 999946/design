import * as React from 'react';
import * as typings from './input.type';
import './input.scss';
export default class Input extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    handleInputChange(event: any): void;
    render(): JSX.Element;
}
