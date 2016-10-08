import * as React from 'react';
import * as typings from './margin-padding-editor.type';
import './margin-padding-editor.scss';
export default class MarginPaddingEditor extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private lastX;
    private lastY;
    private currentHolding;
    private hasMouseDown;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    init(props: typings.PropsDefine): void;
    handleMouseDown(name: typings.MarginPaddingField, event: MouseEvent): void;
    handleMouseMove(event: MouseEvent): void;
    handleMouseUp(): void;
    handleChange(name: typings.MarginPaddingField, event: any): void;
    renderTriangle(position: string, name: string, extendStyle?: React.CSSProperties): JSX.Element;
    handleInputLeave(name: typings.MarginPaddingField): void;
    handleInputEnter(name: typings.MarginPaddingField): void;
    render(): JSX.Element;
}
