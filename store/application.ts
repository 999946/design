import {observable} from 'mobx'
import Event from './event'

export default class Application {
    public event = new Event()

    /**
     * 头部栏高度
     */
    @observable headerHeight = 40
}