import * as React from 'react';
import * as module from './module';
export default class TextComponent extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface;
    state: module.StateInterface;
    componentWillMount(): void;
    handleValueChange(checked: boolean): void;
    render(): JSX.Element;
}
