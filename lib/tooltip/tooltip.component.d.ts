import * as React from 'react';
import * as typings from './tooltip.type';
import './tooltip.scss';
export default class ToolTip extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private selfDom;
    private childrenRef;
    private childrenDom;
    private tooltipRef;
    private tooltipDom;
    private handleChildrenMouseOverBind;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleChildrenMouseOver(event: MouseEvent): void;
    render(): JSX.Element;
}
