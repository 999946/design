import * as React from 'react';
import * as typings from './navbar.type';
export default class Navbar extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
