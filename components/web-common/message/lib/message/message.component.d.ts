import * as React from 'react';
import * as typings from './message.type';
import './message.scss';
export default class Message extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    static newInstance: (props: typings.PropsDefine) => {
        destroy(): void;
    };

    static show(content: string, duration?: number, type?: string, onClose?: Function): void;

    static info(content: string, duration?: number, onClose?: Function): void;

    static success(content: string, duration?: number, onClose?: Function): void;

    static error(content: string, duration?: number, onClose?: Function): void;

    static warning(content: string, duration?: number, onClose?: Function): void;

    componentDidMount(): void;

    destroy(): void;

    render(): JSX.Element;
}
