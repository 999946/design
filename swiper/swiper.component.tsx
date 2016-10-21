import * as React from 'react'
import * as typings from './swiper.type'
import {PanResponder, Animated, View, Platform} from 'react-native'

const isMobile = ()=> {
    if (Platform.OS === 'web' as React.PlatformOSType) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    } else {
        return true
    }
}

export default class Swiper extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 整体区域手势处理
    private panResponder: React.PanResponderInstance

    private lastPositionX: number = null
    private lastPositionY: number = null

    private animatedPositionX = new Animated.Value(0)

    // 滑动过程中，x y的总位移
    private horizontalWholeCounter = 0

    // 容器宽度
    private width = 0
    // 容器高度
    private height = 0

    // 当前是第几个
    private nowIndex = 0

    componentWillMount() {
        this.panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,

            onPanResponderGrant: (evt, gestureState) => {
                if (!isMobile()) {
                    return
                }

                this.lastPositionX = null
                this.lastPositionY = null
                this.horizontalWholeCounter = 0
            },
            onPanResponderMove: (evt, gestureState) => {
                if (!isMobile()) {
                    return
                }

                if (evt.nativeEvent.changedTouches.length <= 1) { // 一根手指触摸时
                    // x 位移
                    let diffX = gestureState.dx - this.lastPositionX
                    if (this.lastPositionX === null) {
                        diffX = 0
                    }

                    // 保留这一次位移作为下次的上一次位移
                    this.lastPositionX = gestureState.dx
                    this.lastPositionY = gestureState.dy

                    this.horizontalWholeCounter += diffX

                    if (this.horizontalWholeCounter > this.width * this.props.maxDistance / 100) {
                        this.horizontalWholeCounter = this.width * this.props.maxDistance / 100
                    }

                    if (this.horizontalWholeCounter < -this.width * this.props.maxDistance / 100) {
                        this.horizontalWholeCounter = -this.width * this.props.maxDistance / 100
                    }

                    this.animatedPositionX.setValue(-this.nowIndex * this.width + this.horizontalWholeCounter)
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (!isMobile()) {
                    return
                }

                if (this.horizontalWholeCounter < -this.width * this.props.threshold / 100) {
                    // 下一张
                    if (this.nowIndex < React.Children.count(this.props.children) - 1) {
                        this.nowIndex += 1
                    }
                } else if (this.horizontalWholeCounter > this.width * this.props.threshold / 100) {
                    // 上一张
                    if (this.nowIndex > 0) {
                        this.nowIndex -= 1
                    }
                }

                Animated.timing(this.animatedPositionX, {
                    toValue: -this.nowIndex * this.width,
                    duration: 100,
                }).start()
            },
            onPanResponderTerminate: (evt, gestureState)=> {

            }
        })
    }

    handleLayout(event: React.LayoutChangeEvent) {
        this.width = event.nativeEvent.layout.width
        this.height = event.nativeEvent.layout.height
        this.forceUpdate()
    }

    render() {
        const Childs = React.Children.map(this.props.children, (child, index)=> {
            return (
                <View style={{width:this.width,height:this.height,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    {child}
                </View>
            )
        })

        const animateConf = {
            transform: [{
                translateX: this.animatedPositionX
            }]
        }

        return (
            <View style={[this.props.style, {overflow:'hidden'}]} {...this.panResponder.panHandlers}
                  onLayout={this.handleLayout.bind(this)}>
                <Animated.View style={[animateConf, {width:this.width,height:this.height,flexDirection:'row'}]}>
                    {Childs}
                </Animated.View>
            </View>
        )
    }
}
                