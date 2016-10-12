import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as typings from './render-to.type'
import ReactElement = __React.ReactElement;

export default class RenderTo extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    private popups: Array<HTMLElement>
    private selectorLength: number

    constructor(props: typings.PropsDefine) {
        super(props)
    }

    componentDidMount() {
        this.popups = []
        let selector = document.querySelectorAll(this.props.selector)
        Array.prototype.slice.call(selector).forEach((parent: HTMLElement) => {
            const popup = document.createElement('div')
            parent.appendChild(popup)
            this.popups.push(popup)
        })

        this.renderLayer()
        this.selectorLength = selector.length
    }

    componentDidUpdate() {
        this.renderLayer()
    }

    componentWillUnmount() {
        this.popups.forEach(popup => {
            ReactDOM.unmountComponentAtNode(popup)
        })
        let selector = document.querySelectorAll(this.props.selector)

        if (selector.length !== this.selectorLength) {
            console.warn('selector amount had been changed!')
        }

        Array.prototype.slice.call(document.querySelectorAll(this.props.selector)).forEach((parent: HTMLElement) => {
            let popup = this.popups.shift()
            parent.removeChild(popup)
        })
    }

    renderLayer() {
        this.popups.forEach(popup => {
            ReactDOM.render(this.props.children as ReactElement<any>, popup)
        })
    }

    render(): any {
        return null
    }
}
                