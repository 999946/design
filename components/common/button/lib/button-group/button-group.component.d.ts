import * as React from 'react';
import * as typings from './button-group.type';
import './button-group.scss';
export default class ButtonGroup extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
