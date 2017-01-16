import * as React from 'react'
import * as typings from './list-view-preview.type'
import {View, ListView} from 'react-native'

export default class ImageComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    renderRow = (rowData: any) => {
        return (
            <View>
                {this.props.children}
            </View>
        )
    }

    render() {
        this.dataSource = this.dataSource.cloneWithRows([1,2,3])

        return (
            <ListView style={this.props.style}
                      dataSource={this.dataSource}
                      renderRow={this.renderRow}/>
        )
    }
}