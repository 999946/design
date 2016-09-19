import * as React from 'react'
import * as typings from './collapse.type'
import * as classNames from 'classnames'

const arrayOrStrEqual = (item: any, arr: any)=> {
    if (_.isArray(arr)) {
        return _.includes(arr, item)
    }
    return item === arr
}

export default class Collapse extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        let activeKey: any = this.props.value || this.props.defaultValue
        if (!this.props.accordion && !_.isArray(activeKey)) {
            activeKey = [activeKey]
        }
        this.setState({
            value: activeKey
        })
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        if ('value' in nextProps) {
            let activeKey: any = nextProps.value || nextProps.defaultValue
            if (!this.props.accordion && !_.isArray(activeKey)) {
                activeKey = [activeKey]
            }
            this.setState({
                value: activeKey
            })
        }
    }

    handleChange(key: any) {
        let activeKey = this.state.value
        if (!this.props.accordion) {
            if (_.isArray(activeKey)) {
                if (_.includes(activeKey, key)) {
                    _.pull(activeKey, key)
                } else {
                    activeKey.push(key)
                }
            } else {
                activeKey = key
            }
        } else {
            if (activeKey === key) {
                activeKey = null
            } else {
                activeKey = key
            }
        }

        this.setState({
            value: activeKey
        }, ()=> {
            this.props.onChange(key)
        })
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        let Children = React.Children.map(this.props.children, (item: any)=> {
            return React.cloneElement(item, {
                active: arrayOrStrEqual(item.key, this.state.value),
                onChange: this.handleChange.bind(this),
                key: item.key,
                activeKey: item.key
            })
        })

        return (
            <div {...this.props.others} className={classes}>
                {Children}
            </div>
        )
    }
}
                