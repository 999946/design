import * as React from 'react'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/index'
const {Switch} = require('react-native')

export default class TextComponent extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    componentWillMount() {
        this.setState({
            checked: this.props.defaultChecked
        })
    }

    handleValueChange(checked: boolean) {
        this.setState({
            checked
        })
    }

    render() {
        const otherProps = others(new module.Props(), this.props)

        return (
            <Switch {...otherProps} value={this.state.checked}
                                    onValueChange={this.handleValueChange.bind(this)}/>
        )
    }
}