import * as React from 'react';
import * as typings from './swiper.type';
import LayoutChangeEvent = __React.LayoutChangeEvent;
export default class Swiper extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private panResponder;
    private responderStart;
    private lastPositionX;
    private lastPositionY;
    private animatedPositionX;
    private horizontalWholeCounter;
    private width;
    private height;
    private nowIndex;
    componentWillMount(): void;
    handleLayout(event: LayoutChangeEvent): void;
    render(): JSX.Element;
}
