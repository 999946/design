import * as React from 'react';
import * as module from './module';
export default class LViewComponent extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface;
    state: module.StateInterface;
    render(): JSX.Element;
}
