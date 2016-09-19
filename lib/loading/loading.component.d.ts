import * as React from 'react';
import * as typings from './loading.type';
import './loading.scss';
export default class Loading extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;

    render(): JSX.Element;
}
