import * as React from 'react';
import * as typings from './opt-group.type';
import './opt-group.scss';
export default class OptGroup extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    handleOptionClick(value: string, label: string): void;
    setLabelValue(labelValue: string): void;
    render(): JSX.Element;
}
