import * as React from 'react';
import * as typings from './tooltip.type';
import './tooltip.scss';
export default class ToolTip extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private childrenRef;
    private childrenDom;
    private tooltipDom;
    private handleChildrenMouseOverBind;
    private handleChildrenMouseLeaveBind;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleChildrenMouseOver(event: MouseEvent): void;
    handleChildrenMouseLeave(event: MouseEvent): void;
    componentDidUpdate(): void;
    setPosition(toolTipStyle: React.CSSProperties, position: string): void;
    renderTooltip(): void;
    render(): React.ReactElement<any>;
}
