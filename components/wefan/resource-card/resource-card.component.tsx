import * as React from 'react'
import * as typings from './resource-card.type'
import style from './resource-card.style'
import {View, Image, Text} from 'react-native'
import '../navbar/navbar.component'

export default class ResourceCard extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <View style={style.container}>
                <Image style={style.image}
                       source={this.props.pictureSource}/>
                <View style={style.textContainer}>
                    <Text style={style.text}
                          numberOfLines={3}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}