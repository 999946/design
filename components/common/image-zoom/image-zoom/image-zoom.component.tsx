import * as React from 'react'
import {View, PanResponder, Animated} from 'react-native'
import * as typings from './image-zoom.type'
import {autoBindClass} from '../../auto-bind/index'
import styles from './image-zoom.style'

@autoBindClass
export default class ImageViewer extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    // 上次/当前/动画 x 位移
    private lastPositionX: number = null
    private positionX = 0
    private animatedPositionX = new Animated.Value(0)

    // 上次/当前/动画 y 位移
    private lastPositionY: number = null
    private positionY = 0
    private animatedPositionY = new Animated.Value(0)

    // 缩放大小
    private scale = 1
    private animatedScale = new Animated.Value(1)
    private zoomLastDistance: number = null
    private zoomCurrentDistance = 0

    // 图片手势处理
    private imagePanResponder: React.PanResponderInstance
    // 最外层手势处理
    private outerPanResponder: React.PanResponderInstance

    // 图片视图当前中心的位置
    private centerX: number
    private centerY: number

    // 上次手按下去的时间
    private lastTouchStartTime: number

    // 滑动过程中，整体横向过界偏移量
    private horizontalWholeOuterCounter = 0

    // 两手距离中心点位置
    private centerDiffX = 0
    private centerDiffY = 0

    // 计算长按的 timeout
    private longPressTimeout: NodeJS.Timer

    componentWillMount() {
        this.imagePanResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作
                this.lastPositionX = null
                this.lastPositionY = null
                this.zoomLastDistance = null
                this.lastTouchStartTime = new Date().getTime()

                if (evt.nativeEvent.changedTouches.length > 1) {
                    this.centerDiffX = (evt.nativeEvent.changedTouches[0].pageX + evt.nativeEvent.changedTouches[1].pageX) / 2 - this.props.cropWidth / 2
                    this.centerDiffY = (evt.nativeEvent.changedTouches[0].pageY + evt.nativeEvent.changedTouches[1].pageY) / 2 - this.props.cropHeight / 2
                }

                // 计算长按
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout)
                }
                this.longPressTimeout = setTimeout(()=> {
                    this.props.onLongPress()
                }, this.props.longPressTime)
            },
            onPanResponderMove: (evt, gestureState) => {
                // 只要有手指操作，都取消长按状态
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout)
                }

                if (evt.nativeEvent.changedTouches.length <= 1) {
                    // 一个手指的情况
                    if (this.props.panToMove) {
                        // x 位移
                        let diffX = gestureState.dx - this.lastPositionX
                        if (this.lastPositionX === null) {
                            diffX = 0
                        }
                        // y 位移
                        let diffY = gestureState.dy - this.lastPositionY
                        if (this.lastPositionY === null) {
                            diffY = 0
                        }

                        // 保留这一次位移作为下次的上一次位移
                        this.lastPositionX = gestureState.dx
                        this.lastPositionY = gestureState.dy

                        // diffX > 0 表示手往右滑，图往左移动，反之同理
                        // horizontalWholeOuterCounter > 0 表示溢出在左侧，反之在右侧，绝对值越大溢出越多
                        if (this.props.imageWidth * this.scale > this.props.cropWidth) { // 如果图片宽度大图盒子宽度， 可以横向拖拽
                            // 没有溢出偏移量或者这次位移完全收回了偏移量才能拖拽
                            if (this.horizontalWholeOuterCounter > 0) { // 溢出在右侧
                                if (diffX < 0) { // 从右侧收紧
                                    if (this.horizontalWholeOuterCounter > Math.abs(diffX)) {
                                        // 偏移量还没有用完
                                        this.horizontalWholeOuterCounter += diffX
                                        diffX = 0
                                    } else {
                                        // 溢出量置为0，偏移量减去剩余溢出量，并且可以被拖动
                                        diffX += this.horizontalWholeOuterCounter
                                        this.horizontalWholeOuterCounter = 0
                                        this.props.horizontalOuterRangeOffset(0)
                                    }
                                } else { // 向右侧扩增
                                    this.horizontalWholeOuterCounter += diffX
                                }

                            } else if (this.horizontalWholeOuterCounter < 0) { // 溢出在左侧
                                if (diffX > 0) { // 从左侧收紧
                                    if (Math.abs(this.horizontalWholeOuterCounter) > diffX) {
                                        // 偏移量还没有用完
                                        this.horizontalWholeOuterCounter += diffX
                                        diffX = 0
                                    } else {
                                        // 溢出量置为0，偏移量减去剩余溢出量，并且可以被拖动
                                        diffX += this.horizontalWholeOuterCounter
                                        this.horizontalWholeOuterCounter = 0
                                        this.props.horizontalOuterRangeOffset(0)
                                    }
                                } else { // 向左侧扩增
                                    this.horizontalWholeOuterCounter += diffX
                                }
                            } else {
                                // 溢出偏移量为0，正常移动
                            }

                            // 产生位移
                            this.positionX += diffX / this.scale

                            // 但是横向不能出现黑边
                            // 横向能容忍的绝对值
                            const horizontalMax = (this.props.imageWidth * this.scale - this.props.cropWidth) / 2 / this.scale
                            if (this.positionX < -horizontalMax) { // 超越了左边临界点，还在继续向左移动
                                this.positionX = -horizontalMax
                                this.horizontalWholeOuterCounter += diffX
                            } else if (this.positionX > horizontalMax) { // 超越了右侧临界点，还在继续向右移动
                                this.positionX = horizontalMax
                                this.horizontalWholeOuterCounter += diffX
                            }
                            this.animatedPositionX.setValue(this.positionX)
                        } else {
                            // 不能横向拖拽，全部算做溢出偏移量
                            this.horizontalWholeOuterCounter += diffX
                        }

                        // 溢出量不会超过设定界限
                        if (this.horizontalWholeOuterCounter > this.props.maxOverflow) {
                            this.horizontalWholeOuterCounter = this.props.maxOverflow
                        } else if (this.horizontalWholeOuterCounter < -this.props.maxOverflow) {
                            this.horizontalWholeOuterCounter = -this.props.maxOverflow
                        }

                        if (this.horizontalWholeOuterCounter !== 0) {
                            // 如果溢出偏移量不是0，执行溢出回调
                            this.props.horizontalOuterRangeOffset(this.horizontalWholeOuterCounter)
                        }

                        if (this.props.imageHeight * this.scale > this.props.cropHeight) {
                            // 如果图片高度大图盒子高度， 可以纵向拖拽
                            this.positionY += diffY / this.scale
                            this.animatedPositionY.setValue(this.positionY)
                        }
                    }
                } else {
                    // 多个手指的情况
                    if (this.props.pinchToZoom) {
                        // 找最小的 x 和最大的 x
                        let minX: number
                        let maxX: number
                        if (evt.nativeEvent.changedTouches[0].locationX > evt.nativeEvent.changedTouches[1].locationX) {
                            minX = evt.nativeEvent.changedTouches[1].pageX
                            maxX = evt.nativeEvent.changedTouches[0].pageX
                        } else {
                            minX = evt.nativeEvent.changedTouches[0].pageX
                            maxX = evt.nativeEvent.changedTouches[1].pageX
                        }

                        let minY: number
                        let maxY: number
                        if (evt.nativeEvent.changedTouches[0].locationY > evt.nativeEvent.changedTouches[1].locationY) {
                            minY = evt.nativeEvent.changedTouches[1].pageY
                            maxY = evt.nativeEvent.changedTouches[0].pageY
                        } else {
                            minY = evt.nativeEvent.changedTouches[0].pageY
                            maxY = evt.nativeEvent.changedTouches[1].pageY
                        }

                        const widthDistance = maxX - minX
                        const heightDistance = maxY - minY
                        const diagonalDistance = Math.sqrt(widthDistance * widthDistance + heightDistance * heightDistance)
                        this.zoomCurrentDistance = Number(diagonalDistance.toFixed(1))

                        if (this.zoomLastDistance !== null) {
                            let distanceDiff = (this.zoomCurrentDistance - this.zoomLastDistance) / 400
                            let zoom = this.scale + distanceDiff

                            if (zoom < 0.6) {
                                zoom = 0.6
                            }
                            if (zoom > 10) {
                                zoom = 10
                            }

                            // 记录之前缩放比例
                            const beforeScale = this.scale

                            // 开始缩放
                            this.scale = zoom
                            this.animatedScale.setValue(this.scale)

                            // 图片要慢慢往两个手指的中心点移动
                            // 缩放 diff
                            const diffScale = this.scale - beforeScale
                            // 找到两手中心点距离页面中心的位移
                            // 移动位置
                            this.positionX -= this.centerDiffX * diffScale / this.scale
                            this.positionY -= this.centerDiffY * diffScale / this.scale
                            this.animatedPositionX.setValue(this.positionX)
                            this.animatedPositionY.setValue(this.positionY)
                        }
                        this.zoomLastDistance = this.zoomCurrentDistance
                    }
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                // 手势完成,如果是单个手指、距离上次按住只有预设秒、滑动距离小于预设值,认为是退出
                const stayTime = new Date().getTime() - this.lastTouchStartTime
                const moveDistance = Math.sqrt(gestureState.dx * gestureState.dx + gestureState.dy * gestureState.dy)
                if (evt.nativeEvent.changedTouches.length === 1 && stayTime < this.props.leaveStayTime && moveDistance < this.props.leaveDistance) {
                    this.props.onCancel()
                    return
                } else {
                    this.props.responderRelease(gestureState.vx)
                }

                if (this.scale < 1) {
                    // 如果缩放小于1，强制重置为 1
                    this.scale = 1
                    Animated.timing(this.animatedScale, {
                        toValue: this.scale,
                        duration: 100,
                    }).start()
                }

                if (this.props.imageWidth * this.scale <= this.props.cropWidth) {
                    // 如果图片宽度小于盒子宽度，横向位置重置
                    this.positionX = 0
                    Animated.timing(this.animatedPositionX, {
                        toValue: this.positionX,
                        duration: 100,
                    }).start()
                }

                if (this.props.imageHeight * this.scale <= this.props.cropHeight) {
                    // 如果图片高度小于盒子高度，纵向位置重置
                    this.positionY = 0
                    Animated.timing(this.animatedPositionY, {
                        toValue: this.positionY,
                        duration: 100,
                    }).start()
                }

                // 横向肯定不会超出范围，由拖拽时控制
                // 如果图片高度大于盒子高度，纵向不能出现黑边
                if (this.props.imageHeight * this.scale > this.props.cropHeight) {
                    // 纵向能容忍的绝对值
                    const verticalMax = (this.props.imageHeight * this.scale - this.props.cropHeight) / 2 / this.scale
                    if (this.positionY < -verticalMax) {
                        this.positionY = -verticalMax
                    } else if (this.positionY > verticalMax) {
                        this.positionY = verticalMax
                    }
                    Animated.timing(this.animatedPositionY, {
                        toValue: this.positionY,
                        duration: 100,
                    }).start()
                }

                // 拖拽正常结束后,如果没有缩放,直接回到0,0点
                if (this.scale === 1) {
                    this.positionX = 0
                    this.positionY = 0
                    Animated.timing(this.animatedPositionX, {
                        toValue: this.positionX,
                        duration: 100,
                    }).start()
                    Animated.timing(this.animatedPositionY, {
                        toValue: this.positionY,
                        duration: 100,
                    }).start()
                }

                // 水平溢出量置空
                this.horizontalWholeOuterCounter = 0

                // 取消长按
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout)
                }
            },
            onPanResponderTerminate: (evt, gestureState)=> {

            }
        })

        this.outerPanResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

            onPanResponderRelease: (evt, gestureState) => {
                this.props.onCancel()

                // 取消长按
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout)
                }
            }
        })
    }

    /**
     * 图片区域视图渲染完毕
     */
    handleLayout(event: React.LayoutChangeEvent) {
        this.centerX = event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2
        this.centerY = event.nativeEvent.layout.y + event.nativeEvent.layout.height / 2
    }

    /**
     * 重置大小和位置
     */
    public reset() {
        this.scale = 1
        this.animatedScale.setValue(this.scale)
        this.positionX = 0
        this.animatedPositionX.setValue(this.positionX)
        this.positionY = 0
        this.animatedPositionY.setValue(this.positionY)
    }

    render() {
        const animateConf = {
            transform: [{
                scale: this.animatedScale
            }, {
                translateX: this.animatedPositionX
            }, {
                translateY: this.animatedPositionY
            }]
        }

        return (
            <View style={[styles.container, {width:this.props.cropWidth,height:this.props.cropHeight}]} {...this.outerPanResponder.panHandlers}>
                <Animated.View style={animateConf}>
                    <View onLayout={this.handleLayout}
                          style={{width:this.props.imageWidth,height:this.props.imageHeight}} {...this.imagePanResponder.panHandlers}>
                        {this.props.children}
                    </View>
                </Animated.View>
            </View>
        )
    }
}