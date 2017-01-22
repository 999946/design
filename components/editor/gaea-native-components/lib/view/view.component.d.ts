import * as React from 'react';
import * as typings from './view.type';
export default class ViewComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    renderChildren(): React.DOMElement<{
        gaeaData: any;
    }, Element>[];
    render(): JSX.Element;
}
