import * as React from 'react'
import * as typings from './swiper.type'
import Swiper from 'nt-swiper'

export default class SwiperComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Swiper maxDistance={this.props.maxDistance}
                    threshold={this.props.threshold}
                    thresholdSpeed={this.props.thresholdSpeed}
                    style={this.props.style}>
                {this.props.children}
            </Swiper>
        )
    }
}