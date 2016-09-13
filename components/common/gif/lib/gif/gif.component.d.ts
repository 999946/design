import * as React from 'react';
import * as typings from './gif.type';
export default class Gif extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    loadSuccess: boolean;

    componentWillMount(): void;

    componentWillReceiveProps(nextProps: typings.PropsDefine): void;

    handlePress(): void;

    handleLoadError(): void;

    handleLoadSuccess(): void;

    render(): JSX.Element;
}
