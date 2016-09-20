import * as React from 'react';
import * as typings from './coll-panel.type';
import './coll-panel.scss';
export default class Collapse extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private toggleTimeout;
    private $dom;
    private height;

    constructor(props: any);

    componentDidMount(): void;

    componentWillReceiveProps(): void;

    handleClick(): void;

    render(): JSX.Element;
}
