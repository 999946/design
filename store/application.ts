import {injectable} from 'inversify'
import {observable} from 'mobx'

@injectable()
export default class ApplicationStore {
    /**
     * 头部栏高度
     */
    @observable headerHeight = 40

    /**
     * 上一次切换的 url path
     */
    lastUrlPath = ''
}