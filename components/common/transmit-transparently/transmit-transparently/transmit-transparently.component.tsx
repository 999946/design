import * as React from 'react'
import * as typings from './transmit-transparently.type'
import others from '../others/others'

export default (...ignore: string[]) => (Target: any) => {
    class Transmit extends React.Component<typings.PropsDefine, typings.StateDefine> {
        static defaultProps: typings.PropsDefine = new typings.Props()
        public state: typings.StateDefine = new typings.State()

        componentWillMount() {
            this.state.others = others(Target.defaultProps, this.props, ignore)
        }

        public render(): React.ReactElement<any> {
            const newProps: any = Object.assign({}, this.props)
            newProps.others = this.state.others
            return React.createElement(Target, newProps, this.props.children)
        }
    }

    const func: any = () => {
        return Transmit
    }

    return func()
}