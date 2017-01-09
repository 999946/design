import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as $ from 'jquery'
import * as classNames from 'classnames'
import * as typings from './coll-panel.type'

import {TransmitTransparently} from 'nt-transmit-transparently'

import './coll-panel.scss'

@TransmitTransparently()
export default class Collapse extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private toggleTimeout: any
    private $dom: JQuery
    private height: number

    constructor(props: any) {
        super(props)
        this.toggleTimeout = null
    }

    componentDidMount() {
        this.$dom = $(ReactDOM.findDOMNode(this))
        this.setState({
            contentHeight: this.$dom.find('[data-fit-coll-content]').outerHeight()
        })
    }

    componentWillReceiveProps() {
        this.setState({
            contentHeight: this.$dom.find('[data-fit-coll-content]').outerHeight()
        })
    }

    handleClick() {
        this.setState({
            finish: false
        }, ()=> {
            this.props.onChange(this.props.activeKey)
        })

        if (this.toggleTimeout) {
            clearTimeout(this.toggleTimeout)
        }

        this.toggleTimeout = setTimeout(()=> {
            this.setState({
                finish: true
            })
        }, 300)
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'panel': true,
            'panel-default': true,
            [this.props.className]: !!this.props.className
        })

        const panelCollapseClass = classNames({
            'panel-collapse': true,
            'collapse': true,
            'in': true,
            'show': this.props.active
        })

        const rightChevronClass = classNames({
            'fa': true,
            'fa-chevron-right': true,
            'rotate-pre': true,
            'rotate': this.props.active
        })

        // 设置height属性
        let height: any = null
        height = this.props.active ? this.state.contentHeight : null
        if (this.state.finish) {
            if (this.props.active) {
                height = 'auto'
            } else {
                height = 0
            }
        }
        let contentContainerStyle = {
            height: height
        }

        this.height = height

        return (
            <div {...this.props.others} className={classes}>
                <div className="panel-heading"
                     onClick={this.handleClick.bind(this)}>
                    <i className={rightChevronClass}
                       style={{marginRight: 5}}/>
                    {this.props.header}
                </div>
                <div className={panelCollapseClass}
                     style={contentContainerStyle}>
                    <div data-fit-coll-content>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
                