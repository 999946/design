import * as React from 'react';
import * as typings from './number.type';
import './number.scss';
export default class Number extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private interval;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    handleMouseUp(): void;
    handleUnitChange(value: string): void;
    increase(): void;
    reduce(): void;
    rightRender(): JSX.Element;
    handleChange(value: string): void;
    safeSetValue(value: string | number, fullLength?: boolean): void;
    render(): JSX.Element;
}
