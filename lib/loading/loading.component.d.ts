import * as React from 'react';
import * as typings from './loading.type';
export default class Loading extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private angle;
    componentDidMount(): void;
    componentWillUnmount(): void;
    animate(): void;
    render(): JSX.Element;
}
