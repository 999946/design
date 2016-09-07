import * as React from 'react';
import * as typings from './gif.type';
export default class Gif extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    handlePress(): void;
    render(): JSX.Element;
}
