import * as React from 'react';
import * as typings from './gaea-native-components.type';
export default class GaeaNativeComponents extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;

    render(): JSX.Element;
}
