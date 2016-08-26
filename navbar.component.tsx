import * as React from 'react'
import * as typings from './navbar.type'
import style from './navbar.style'
import {View, TouchableOpacity, Text} from 'react-native'

export default class Navbar extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <View style={[style.container]}>
                <View style={style.leftContainer}>
                    <TouchableOpacity activeOpacity={0.7}
                                      style={style.navBtn}
                                      onPress={this.props.onLeftPress}>
                        {this.props.left}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}
                                      style={style.navBtn}
                                      onPress={this.props.onLeftExtPress}>
                        {this.props.leftExt}
                    </TouchableOpacity>
                </View>

                <View style={style.centerContainer}>
                    {
                        this.props.center
                        ||
                        <Text numberOfLines={1}
                              style={[style.titleText, this.props.titleStyle ]}>{this.props.title}</Text>
                    }
                </View>

                <View style={style.rightContainer}>
                    <TouchableOpacity activeOpacity={0.7}
                                      style={style.navBtnRight}
                                      onPress={this.props.onRightExtPress}>
                        {this.props.rightExt}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}
                                      style={style.navBtnRight}
                                      onPress={this.props.onRightPress}>
                        {this.props.right}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}