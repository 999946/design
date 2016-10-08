import * as React from 'react';
import * as typings from './render-to.type';
export default class RenderTo extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private popups;
    private selectorLength;
    constructor(props: typings.PropsDefine);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    renderLayer(): void;
    render(): any;
}
