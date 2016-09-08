import * as React from 'react';
import * as typings from './image.type';
export default class WefanImage extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    fallbackAddon(): JSX.Element;
    render(): JSX.Element;
}
