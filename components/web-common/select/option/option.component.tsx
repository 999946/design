import * as React from 'react'
import * as typings from './option.type'
import * as classNames from 'classnames'

import * as _ from 'lodash'
import {others} from 'nt-transmit-transparently'

import './option.scss'

const reg = (input: any) => {
    let flags = 'g'
    return new RegExp(input, flags)
}

export default class Select extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        // 如果当前value和select的value相同,传递给父级
        if (this.props.value === this.props.activeValue) {
            this.props.setLabelValue(this.props.value, this.props.children.toString() as string)
        }
    }

    handleClick() {
        if (this.props.disabled) return
        this.props.onClick(this.props.value, this.props.children.toString() as string, this.props.optChildren, this.props.zIndex)
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'active': this.props.active,
            'disabled': this.props.disabled,
            [this.props.className]: !!this.props.className
        })

        if (!_.isEmpty(this.props.searchValue)) {
            let regex = reg(_.escape(this.props.searchValue.toString()))
            if (regex.test(this.props.children.toString())) {
                let matchedString = _.escape(this.props.children.toString()).replace(regex, '<span class="active">' + this.props.searchValue + '</span>')
                return (
                    <li onClick={this.handleClick.bind(this) }
                        className={classes}
                        dangerouslySetInnerHTML={{__html:matchedString}}/>
                )
            } else {
                return null
            }
        }

        return (
            <li {...others(new typings.Props(), this.props) }
                onClick={this.handleClick.bind(this) }
                className={classes}>{this.props.children}</li>
        )
    }
}
                