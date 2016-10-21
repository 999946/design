export default class Scale {
    private meta: HTMLElement
    private reactDomName: string
    private width: number

    constructor(width: number = 400, reactDomName: string = 'react-dom') {
        this.width = width
        this.reactDomName = reactDomName
    }

    scale() {
        // 设置页面缩放~
        const ratio = screen.width / this.width
        this.meta = document.createElement('meta')
        this.meta.setAttribute('name', 'viewport')
        this.meta.setAttribute('content', 'width=' + this.width + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,minimal-ui')
        document.getElementsByTagName('head')[0].appendChild(this.meta)
        document.getElementById(this.reactDomName).style.margin = '0 auto'
        document.getElementById(this.reactDomName).style.width = this.width + 'px'
    }

    unScale() {
        if (!this.meta) {
            return
        }

        document.getElementsByTagName('head')[0].removeChild(this.meta)
        document.getElementById(this.reactDomName).style.margin = null
        document.getElementById(this.reactDomName).style.width = null
    }
}