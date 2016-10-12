import * as React from 'react'
import {View, Image, Animated, Easing} from 'react-native'
import * as typings from './loading.type'
import styles from './loading.style'

export default class Loading extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 旋转角度
    private angle = new Animated.Value(0)

    componentDidMount() {
        this.animate()
    }

    componentWillUnmount() {

    }

    animate() {
        this.angle.setValue(0)
        Animated.timing(this.angle, {
            toValue: 360,
            duration: 1500,
            easing: Easing.linear
        }).start(() => {
            this.animate.call(this)
        })
    }

    render() {
        return (
            <Animated.Image
                style={[styles.image, {
                        transform: [{
                            rotate: this.angle.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg']
                            })
                        }],
                    }]}
                source={require('../images/loading.png')}/>
        )
    }
}
                