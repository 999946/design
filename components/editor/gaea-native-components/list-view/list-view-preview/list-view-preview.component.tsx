import * as React from 'react'
import * as typings from '../list-view.type'
import * as _ from 'lodash'
import {View, ListView, RefreshControl, Platform} from 'react-native'

export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.fetchTop()
    }

    // 获取用户自定义请求中 listView 的字段
    getListViewData(data: any) {
        if (this.props.listPath === '') {
            return data
        }

        return _.get(data, this.props.listPath)
    }

    /**
     * 加载更多
     */
    fetchMore() {
        this.setState({
            fetching: true
        })

        fetch(this.props.apiUrl + '?pn=' + (this.state.page + 1) + '&rn=20', {
            mode: 'cors'
        }).then(res => {
            res.json().then(data => {
                const listData = this.getListViewData(data)
                if (!listData) {
                    return
                }

                const mergeList = this.state.lists.concat(listData.list)

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(mergeList),
                    lists: mergeList,
                    initRequestFinished: true,
                    page: this.state.page + 1,
                    hasMore: listData.page && listData.page.has_more,
                    fetching: false
                })
            })
        }).catch(reason => {
            console.warn('Gaea request failed:', reason)
        })
    }

    /**
     * 刷新第一页
     */
    fetchTop() {
        this.setState({
            fetching: true
        })

        fetch(this.props.apiUrl+'?pn=1&rn=20', {
            mode: 'cors'
        }).then(res => {
            res.json().then(data => {
                const listData = this.getListViewData(data)
                if (!listData) {
                    return
                }

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(listData.list),
                    lists: listData.list,
                    initRequestFinished: true,
                    page: 1,
                    hasMore: listData.page && listData.page.has_more,
                    fetching: false
                })
            })
        }).catch(reason => {
            console.warn('Gaea request failed:', reason)
        })
    }

    getRefreshControl = () => {
        // 网页暂时不支持
        if (Platform.OS === 'web') {
            return null
        }

        return (
            <RefreshControl
                onRefresh={this.handleTopRefresh}
                refreshing={false}/>
        )
    }

    /**
     * 触发顶部刷新
     */
    handleTopRefresh = () => {
        this.fetchTop()
    }

    /**
     * listview 滚动到底部
     */
    handleListviewEndReached = () => {
        if (!this.state.initRequestFinished) {
            return
        }

        if (this.state.fetching) {
            return
        }

        if (!this.state.hasMore) {
            return
        }

        // 刷新最新动态
        this.fetchMore()
    }

    renderRow = (rowData: any): any => {
        return React.Children.map(this.props.children, (child: any) => React.cloneElement(child, {
            gaeaData: rowData
        }))
    }

    render() {
        return (
            <ListView style={this.props.style}
                      dataSource={this.state.dataSource}
                      refreshControl={this.getRefreshControl()}
                      onEndReached={this.handleListviewEndReached}
                      renderRow={this.renderRow}/>
        )
    }
}