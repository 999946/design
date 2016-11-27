import * as React from 'react';
import * as typings from './view-absolute.type';
export default class ViewComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
