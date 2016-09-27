import * as React from 'react'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/index'
import {Image} from 'react-native'

export default class TextComponent extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    render() {
        const style = {
            fontSize: this.props.fontSize
        }

        const otherProps = others(new module.Props(), this.props)

        return (
            <Image {...otherProps} style={style}/>
        )
    }
}