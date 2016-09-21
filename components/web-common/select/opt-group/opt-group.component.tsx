import * as React from 'react'
import * as typings from './opt-group.type'
import * as classNames from 'classnames'

import './opt-group.scss'

export default class OptGroup extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    handleOptionClick(value: string, label: string) {
        this.props.onClick(value, label)
    }

    setLabelValue(labelValue: string) {
        this.props.setLabelValue(labelValue)
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        // 循环子元素
        let Children: React.ReactNode = this.props.children

        if (!this.props.ignoreChildren) {
            Children = React.Children.map(this.props.children, (item: React.ReactElement<any>, index: number)=> {
                let active = false
                if (item.props.value === this.props.activeValue) {
                    active = true
                }

                return React.cloneElement(item, Object.assign({}, item.props, {
                    onClick: this.handleOptionClick.bind(this),
                    key: index,
                    active: active,
                    setLabelValue: this.setLabelValue.bind(this),
                    activeValue: this.props.activeValue,
                    searchValue: this.props.searchValue
                }))
            })
        }

        return (
            <div className={classes}>
                <li className="group-result">{this.props.label}</li>
                {Children}
            </div>
        )
    }
}
                