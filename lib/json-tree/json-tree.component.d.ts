import * as React from 'react';
import * as typings from './json-tree.type';
import './json-tree.scss';
export default class JsonTree extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
