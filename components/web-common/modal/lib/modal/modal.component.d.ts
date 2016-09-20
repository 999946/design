import * as React from 'react';
import * as typings from './modal.type';
import './modal.scss';
export default class Modal extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private modalDom;
    handleOk(): void;
    handleCancel(): void;
    handleOutClick(): void;
    handleModalClick(event: TouchEvent): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    renderModalDom(): void;
    render(): any;
}
