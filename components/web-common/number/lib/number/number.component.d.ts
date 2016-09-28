import * as React from 'react';
import * as typings from './number.type';
import './number.scss';
export default class Number extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    handleMouseUp(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    increase(): void;
    reduce(): void;
    rightRender(): JSX.Element;
    handleChange(value: string): void;
    safeSetValue(value: string | number, fullLength?: boolean): void;
    render(): JSX.Element;
}
