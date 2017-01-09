import * as React from 'react'
import * as typings from './button.type'
import CommonButton from '../../../common/button/index'
import styles from './button.style'

export default class Button extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const extStyle = {
            borderRadius: this.props.size / 2,
            height: this.props.size
        }
        const extTextStyle = {
            fontSize: this.props.fontSize,
        }

        return <CommonButton
            onPress={this.props.onPress}
            style={[styles.btn, extStyle, styles[this.props.type], this.props.style]}
            activeStyle={styles.activeBtn}
            textStyle={[styles.text, extTextStyle, styles[this.props.type], this.props.textStyle]}
            activeTextStyle={styles.activeText}>{this.props.children}</CommonButton>
    }
}
                