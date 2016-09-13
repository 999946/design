import {observable} from 'mobx'
import Event from './event'

export default class Application {
    public event = new Event()

    /**
     * 头部栏高度
     */
    @observable headerHeight = 40

    /**
     * 上一次切换的 url path
     */
    lastUrlPath = ''

    setLastUrlPath(path: string) {
        this.lastUrlPath = path
    }
}