import * as React from 'react';
import * as typings from './scroll-view.type';
export default class ScrollViewComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
