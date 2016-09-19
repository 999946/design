import * as React from 'react';
import * as typings from './timeago.type';
export default class Timeago extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private _isMounted;
    private timeoutId;

    constructor(props: any);

    protected componentWillMount(): void;

    protected componentDidMount(): void;

    protected componentDidUpdate(nextProps: typings.PropsDefine): void;

    protected componentWillUnmount(): void;

    protected tick(refresh?: boolean): void;

    render(): React.ReactElement<any>;
}
