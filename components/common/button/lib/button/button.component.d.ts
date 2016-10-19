import * as React from 'react';
import * as typings from './button.type';
export default class Button extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    handlePressIn(): void;
    handlePressOut(): void;
    getChildren(): {};
    render(): JSX.Element;
}