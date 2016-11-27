import * as React from 'react';
import * as typings from './text-input.type';
export default class TextInputComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
