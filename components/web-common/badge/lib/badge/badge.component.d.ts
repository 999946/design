import * as React from 'react';
import * as typings from './badge.type';
import './badge.scss';
export default class Badge extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
