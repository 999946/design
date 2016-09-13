import * as React from 'react';
import * as typings from './resource-card.type';
export default class ResourceCard extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;

    render(): JSX.Element;
}
