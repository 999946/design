import * as React from 'react';
import * as typings from '../list-view.type';
export default class ImageComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    getListViewData(data: any): any;
    fetchMore(): void;
    fetchTop(): void;
    getRefreshControl: () => JSX.Element;
    handleTopRefresh: () => void;
    handleListviewEndReached: () => void;
    renderRow: (rowData: any) => any;
    render(): JSX.Element;
}
