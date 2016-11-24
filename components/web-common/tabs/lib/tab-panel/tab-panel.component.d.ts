import * as React from 'react';
import * as typings from './tab-panel.type';
import './tab-panel.scss';
export default class TabPanel extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
